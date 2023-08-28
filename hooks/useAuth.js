import { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../firebaseConfig'

export default function useAuth() {
    const [isLoading, setIsLoading] = useState(true)
    const { replace, pathname } = useRouter()

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).catch((error) => alert(error.message))
    }
    const logout = () => signOut(auth)

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) replace('/admin/dashboard')
            else replace('/admin/login')
            setTimeout(() => setIsLoading(false), 700)
        })
        return () => unsubscribe()
    }, [auth])

    return { login, logout, isLoading }
}