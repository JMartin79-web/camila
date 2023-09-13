
export default function SubmitButton({ children }) {
    return (
        <button className='bg-green-500 text-white px-4 py-2 w-fit rounded hover:opacity-50' type='submit'>
            <p className='hidden sm:block text-white'>{children}</p>
            <span className='sm:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" />
                    <path d="M17 3V12H7V3" />
                    <path d="M7 21V16H17V21" />
                </svg>
            </span>
        </button>
    )
}
