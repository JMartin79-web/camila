import mendoza from '../assets/hero_img2.jpg'
import { useLocation } from 'react-router-dom';

export default function Loading({ isLoading }) {
    const { pathname } = useLocation()
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            {pathname === '/' && <img src={mendoza} alt="mendoza" className="absolute" />}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-r-4 border-tourBrown"></div>
        </div>
    );
}
