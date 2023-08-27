import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function Dashboard() {
    const { logout, isLoading } = useAuth()

    return (<>
        <Loading isLoading={isLoading} />
        <Toaster />
        <div className='min-h-screen'>
            <button onClick={logout}>Logout</button>
        </div>
    </>)
}
