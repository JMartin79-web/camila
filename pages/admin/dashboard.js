import Loading from '@/components/Loading'
import NewTour from '@/components/NewTour'
import useAuth from '@/hooks/useAuth'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function Dashboard() {
    const { logout, isLoading } = useAuth()

    return (<>
        <Loading isLoading={isLoading} />
        <Toaster />
        <div className='min-h-screen bg-gray-100 text-black p-6'>
            <button className='absolute right-4 top-2 bg-tourBrown text-white px-4 py-2 rounded hover:opacity-50' onClick={logout}>Logout</button>
            <center>
                <NewTour collection='tours' />
            </center>
        </div>
    </>)
}
