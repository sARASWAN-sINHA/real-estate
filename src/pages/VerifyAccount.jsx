import { useState } from 'react';

import { Link, useNavigate } from 'react-router';

import SignInButton from '../components/SignInButton';

import { confirmSignUp } from 'aws-amplify/auth';
import { useAuthContext } from '../AuthContext';

export const VerifyAccount = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ code: '' });
    const { code } = formData;
    const updateFormData = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        });
    }

    const { login } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here

        try {
            const { isSignUpComplete, nextStep } = await confirmSignUp({
                username: sessionStorage.getItem("userId"),
                confirmationCode: code,
            });


            if (nextStep?.signUpStep === 'DONE' && isSignUpComplete === true) {
                // Assuming you have a login function in your AuthContext
                login();
                sessionStorage.removeItem("userId");
                navigate('/offers');
            }
        }
        catch (error) {
            alert('Error confirming sign up: ' + error.message);
        }
    }

    return (
        <section>
            <h1 className='text-center font-bold text-3xl mt-5'>Verify Account</h1>

            <div className='flex flex-wrap justify-center items-center px-6 py-6 max-w-8xl mx-auto'>

                <div className='md:w-[67%] lg:w-[49%] p-5 sm:w-[100%]'>
                    <img className='rounded-2xl w-full'
                        src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5fGVufDB8fDB8fHww" alt="key-to-home" />
                </div>

                <div className='md:w-[67%] lg:w-[49%] sm:w-[100%] p-5 lg:ml-5'>
                    <form onSubmit={handleSubmit} className='p-5'>
                        <input
                            className="bg-white w-full rounded mb-5"
                            type="text"
                            id='code'
                            placeholder='Verification Code'
                            onChange={(e) => updateFormData(e)}
                            value={code}
                        />

                        <div className='flex justify-between text-sm sm:text-md mb-5'>
                            <p className>Have an account? <Link className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out" to="/sign-in">Sign In</Link> </p>
                        </div>
                        <SignInButton buttonText={"Verify"} />
                    </form>
                </div>
            </div>

        </section>

    )
}
