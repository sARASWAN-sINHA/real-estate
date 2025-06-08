import React from 'react'

const SignInButton = ({buttonText}) => {
    return (
        <button
            className="
                w-full
                bg-blue-600 text-white
                px-6 py-2 text-xs
                uppercase font-semibold
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                transition duration-200 ease-in-out
                rounded"
            type="submit"
        >
           {buttonText || 'Sign In'}
        </button>
    )
}
export default SignInButton