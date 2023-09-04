import useAuth from '@/hooks/useAuth'
import Loading from './Loading'
import { Toaster } from 'react-hot-toast'
import Flags from './Flags'

export default function AdminLayout({ children }) {
  const { logout, isLoading } = useAuth()

  return (
    <>
      <Loading isLoading={isLoading} />
      <Toaster />
      <div className='min-h-screen bg-gray-100 text-black p-6'>
        <Flags style='flex gap-2' />
        <button className='absolute right-5 top-4 bg-tourBrown text-white px-4 py-2 rounded hover:opacity-50'
          onClick={logout}>
          Logout
        </button>
        {children}
      </div>
    </>
  )
}
