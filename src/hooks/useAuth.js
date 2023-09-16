import { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function useAuth() {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).catch((error) => alert(error.message))
    }
    const logout = () => signOut(auth)

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser && pathname === '/admin/dashboard-es') {
                return setIsLoading(false)
            }
            else if (currentuser && pathname === '/admin/dashboard-port') {
                return setIsLoading(false)
            }
            else if (currentuser) navigate('/admin/dashboard-en')
            else navigate('/admin/login')
        })
        setTimeout(() => setIsLoading(false), 700)
        return () => unsubscribe()
    }, [auth])

    return { login, logout, isLoading }
}