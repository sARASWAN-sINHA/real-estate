import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import OAuthButton from '../components/OAuthButton';
import SignInButton from '../components/SignInButton';

export const SignIn = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const updateFormData = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      }
    })
  }
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }

  return (
    <section>
      <h1 className='text-center font-bold text-3xl mt-5'>Sign In</h1>

      <div className='flex flex-wrap justify-center items-center px-6 py-6 max-w-8xl mx-auto'>

        <div className='md:w-[67%] lg:w-[49%] p-5 sm:w-[100%]'>
          <img
            className='rounded-2xl w-full'
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5fGVufDB8fDB8fHww"
            alt="key-to-home" />
        </div>

        <div className='md:w-[67%] lg:w-[49%] sm:w-[100%] p-5 lg:ml-5'>
          <form className='p-5'>
            <input
              className="bg-white w-full rounded mb-5"
              type="email"
              id='email'
              placeholder='Email Address'
              onChange={(e) => updateFormData(e)}
              value={email}
            />
            <div className='w-full relative'>
              <input
                className="bg-white w-full mb-5"
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                onChange={(e) => updateFormData(e)}
                value={password}
              />
              {showPassword ? <FaEye className='absolute right-3 top-3 text-xl hover:cursor-pointer' onClick={togglePasswordVisibility} /> : <FaEyeSlash className='absolute right-3 top-3 text-xl hover:cursor-pointer' onClick={togglePasswordVisibility} />}
            </div>
            <div className='flex justify-between text-sm sm:text-md mb-5'>
              <p>Don't have an account? <Link className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out" to="/sign-up">Register</Link> </p>
              <div className='text-blue-600 hover:cursor-pointer hover:text-blue-800 transition duration-200 ease-in-out'>
                <Link to="/forgot-password">Forgot Password? </Link>
              </div>
            </div>
            <SignInButton />

            <div className='flex mt-2 space-x-1.5 my-2'>
              <p className='flex-grow border-t border-gray-300 mt-3'></p>
              <p>OR</p>
              <p className='flex-grow border-t border-gray-300 mt-3'></p>
            </div>
            <OAuthButton />

          </form>
        </div>
      </div>

    </section>

  )
}
