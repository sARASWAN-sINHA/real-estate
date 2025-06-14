import { useLocation, useNavigate } from 'react-router'
import { useAuthContext } from '../AuthContext';
import { signOut } from 'aws-amplify/auth';

export const Header = () => {

    const currentUrl = () => {
        let location = useLocation();
        let currentPath = location.pathname;
        return currentPath;
    }

    const { isAuthenticated, logout } = useAuthContext();

    const handleSignOut = async () => {
        try {
            await signOut();
            logout(); // Update the context state

        } catch (error) {
            alert('Error signing out: ' + error.message);
        }
    }
    const navigate = useNavigate();


    return (
        <div className='header border-b shadow-md p-2 pb-0 bg-white sticky top-0 z-50'>
            <header className='flex justify-between items-center max-w-6xl mx-auto'>
                <div className='logo '>
                    <img
                        className='h-5.25 cursor-pointer' src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
                        alt="logo"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className='nav-menu mr-3'>
                    <ul className='flex space-x-10'>
                        <li
                            className={`cursor-pointer py-3 font-semibold
                            ${currentUrl() === '/' ? "text-black" : "text-gray-500"}
                            border-b-4 ${currentUrl() === '/' ? "border-b-orange-500" : "border-b-transparent"}`}
                            onClick={() => navigate("/")}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer py-3 font-semibold
                            ${currentUrl() === '/offers' ? "text-black" : "text-gray-500"} border-b-4
                            ${currentUrl() === '/offers' ? "border-b-orange-500" : "border-b-transparent"} `}
                            onClick={() => navigate("/offers")}
                        >
                            Offers
                        </li>
                        <li
                            className={`cursor-pointer py-3 font-semibold
                            ${currentUrl() === '/sign-in' ? "text-black" : "text-gray-500"} border-b-4
                            ${currentUrl() === '/sign-in' ? "border-b-orange-500" : "border-b-transparent"} `}
                            onClick={() => isAuthenticated === false ? navigate("/sign-in") : handleSignOut()}
                        >
                            {isAuthenticated === false ? "Sign In" : "Sign Out"}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}