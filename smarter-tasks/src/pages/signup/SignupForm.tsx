import React, { useState } from 'react';

import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";


const SignupForm: React.FC = () => {
  type Inputs = {
    name : string,
    user_name : string,
    email : string,
    password  : string
  };
  const navigate = useNavigate();
  const {register ,  handleSubmit, formState: { errors } } = useForm<Inputs>();


  const onSubmit : SubmitHandler<Inputs> = async (data) => {
    // event.preventDefault();
    const userData = data;
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }

      console.log('Sign-up successful');
      // navigate("/dashboard");
      // src/pages/signup/SignupForm.tsx
      
      let data = await response.json()
      console.log(data);
      
      localStorage.setItem('authToken',data.token);
      localStorage.setItem('userData', JSON.stringify(data.user))
      try {
        // ...
        // ...
        
        // Redirect users to account path after signup
        navigate("/account")
        // window.location.reload()

    } catch (error) {
      console.error('Sign-up failed:', error);
    }

      // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
        <input type="text" 
        id="organisationName"
        placeholder='Enter organisation name...'
        autoFocus
        {...register('name', { required: true })}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input type="text"  
        id="userName"
        placeholder='Enter username...'
        autoFocus
        {...register('user_name', { required: true })}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email"
        id="userEmail" 
        placeholder='Enter email...'
        autoFocus
        {...register('email', { required: true })}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password"
        id="userPassword" 
        placeholder='Enter password...'
        autoFocus
        {...register('password', { required: true })}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
    </form>
  );
};

export default SignupForm;
