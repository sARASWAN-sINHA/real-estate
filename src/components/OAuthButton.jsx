
import { FcGoogle } from "react-icons/fc";
const OAuthButton = () => {
    return (
        <div>
            <button className="
                flex items-center justify-center
                w-full
                bg-red-600 text-white
                px-6 py-2 text-xs
                uppercase font-semibold
                shadow-md
                hover:bg-red-700 hover:shadow-lg
                transition duration-200 ease-in-out
                rounded">
                <FcGoogle className="text-xl mr-1 bg-white rounded-full"/>
                Continue with Google
            </button>
        </div>
    )
}

export default OAuthButton;