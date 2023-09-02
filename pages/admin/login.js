import { useRef } from 'react';
import useAuth from '@/hooks/useAuth';
import Loading from '@/components/Loading';

export default function AdminLogin() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const { login, isLoading } = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef?.current?.value
        const password = passwordRef?.current?.value
        if (!email || !password) return alert('Email and Password are required')
        login(email, password)
    }
    //"border-2 border-solid border-orange-600 focus:border-orange-700 rounded-lg px-4 py-2 focus:outline-none"
    return (<><Loading isLoading={isLoading} />
        <form onSubmit={handleSubmit} className='min-h-screen grid gap-2 place-content-center'>
            <div className='flex flex-col gap-2 w-72'>
                <label htmlFor="email" className='text-lg font-semibold'>
                    Email:
                </label>
                <input className='border-slate-400 border-opacity-25 focus:border-tourBrown' type="text" id="email" autoComplete='off' ref={emailRef} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='text-lg font-semibold'>
                    Password:
                </label>
                <input className='border-slate-400 border-opacity-25 focus:border-tourBrown' type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit" className='bg-tourBrown text-white font-bold py-2 my-2 rounded-md'>
                Login
            </button>
        </form>
    </>)
}
