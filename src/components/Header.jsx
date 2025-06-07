import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export const Header = () => {

    const currentUrl = () => {
        let location = useLocation();
        let currentPath = location.pathname;
        return currentPath;
    }

    const navigate = useNavigate();

    return (
        <div className='header border-b shadow-md bg-white '>
            <header className='flex justify-between items-center max-w-6xl mx-auto'>
                <div className='logo '>
                    <img
                        className='h-5 cursor-pointer' src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
                        alt="logo"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className='nav-menu'>
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
                            onClick={() => navigate("/sign-in")}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
