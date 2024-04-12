import React, { useState } from 'react';
import logo1 from '../assets/logo1.jpeg';
import google from '../assets/google.jpeg';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle between sign-in and sign-up forms

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleSignUpForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo1} alt="Logo" className="w-20 h-20 mb-4" />
      <h1 className="text-2xl font-semibold mb-4">{showSignUp ? "Sign Up for an account" : "Sign in to your account"}</h1>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <div className="relative">
            <input type={passwordVisible ? "text" : "password"} id="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" onClick={togglePasswordVisibility}>
              <svg className="h-10 w-10 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {passwordVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </svg>
            </button>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">{showSignUp ? "Sign Up" : "Sign In"}</button>
        {!showSignUp && (
          <p className="text-sm text-gray-600 mb-2"><a href="#" className="text-blue-500">Forgot your password?</a></p>
        )}
        <div className="mb-2 text-center">
          <p className="text-sm text-gray-600">{showSignUp ? "Already have an account? " : "Don't have an account? "} <a href="#" className="text-blue-500" onClick={toggleSignUpForm}>{showSignUp ? "Sign In" : "Sign Up"}</a></p>
          {showSignUp && (
            <div className="text-sm text-gray-600">
              By clicking {showSignUp ? "Sign Up" : "Sign In"}, you agree to our <a href="#" className="text-blue-500">terms of service & privacy policy</a>.
            </div>
          )}
          {showSignUp && (
            <div className="mt-2">
              <span className="text-gray-600 font-semibold">or</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full mb-4">
            <img src={google} alt="Google" className="w-6 h-6 mr-2" />
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;
