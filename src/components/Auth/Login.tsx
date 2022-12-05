import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`your email is ${formData.email} and your password is ${formData.password}`);
    console.log(process.env.REACT_APP_BASE_URL);
  }

  return (
    <div className="flex font-sans h-screen min-w-full items-center bg-indigo-50">
      <div className="h-[600px] w-[900px] mx-auto items-center rounded shadow-sm">
        <div className="grid grid-cols-4 gap-0 h-full ">
          <div className="col-span-2 w-full text-gray-600 h-full rounded-l-md p-20 bg-white">
            <p className="text-4xl mt-3 mb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Kira</p>
            <p className="text-sm font-semibold mb-10">Manage your expenses and track your savings with ease by using our app.</p>
            <p className="text-xs">Welcome back, please enter your credentials.</p>
            <form className="mt-2" autoComplete="off" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center">
                <div className="bg-slate-100 p-3 w-full rounded-md flex items-center border-2 border-slate-100 focus-within:border-solid focus-within:border-indigo-300">
                  <EnvelopeIcon className="h-5 w-5 mr-2 text-indigo-400"/>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com" 
                    className="bg-slate-100 outline-none text-sm flex-1"
                    autoFocus
                  />                
                </div>
                <div className="bg-slate-100 p-3 mt-2 w-full rounded-md flex items-center border-2 border-slate-100 focus-within:border-solid focus-within:border-indigo-300">
                  <LockClosedIcon className="h-5 w-5 mr-2 text-indigo-400"/>
                  <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                    className="bg-slate-100 outline-none text-sm flex-1"
                  />                
                </div>
              </div>
              <p className="text-right font-semibold text-xs mt-4 mb-4 text-indigo-400">Forgot password?</p>
              <button 
                className="text-sm font-semibold tracking-normal text-center w-full text-white rounded p-3 bg-gradient-to-r from-indigo-400 to-pink-300 focus:outline-indigo-500"
                type="submit"
              >Login</button>
              <p className="text-center text-xs mt-5 mb-2">Don't have an account?
                <span className="font-semibold text-indigo-400"> Request now</span>
              </p>
            </form>
          </div>
          <div className="w-full col-span-2 h-full rounded-r-md bg-gradient-to-r from-indigo-500 to-pink-300"></div>
        </div>
      </div>
    </div>
  )
}

export default Login;