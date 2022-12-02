import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Login = () => {
  return (
    <div className="flex font-sans h-screen min-w-full items-center bg-indigo-50">
      <div className="h-[600px] w-[900px] mx-auto items-center rounded shadow-sm">
        <div className="grid grid-cols-4 gap-0 h-full ">
          <div className="col-span-2 w-full text-gray-700 h-full rounded-l-md p-20 bg-white">
            <p className="text-4xl mb-1 font-bold text-indigo-500">Quira</p>
            <p className="text-sm font-semibold mb-10">Manage your expenses and track your savings with ease by using our app.</p>
            <p className="text-xs">Welcome back, please enter your credentials.</p>
            <form className="mt-2">
              <div className="flex flex-col items-center">
                <div className="bg-slate-100 p-3 w-full rounded-md flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2 text-indigo-400"/>
                  <input 
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="bg-slate-100 outline-none text-sm flex-1"
                    autoComplete="off"
                  />                
                </div>
                <div className="bg-slate-100 p-3 w-full rounded-md flex items-center mt-2">
                  <LockClosedIcon className="h-5 w-5 mr-2 text-indigo-400"/>
                  <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-slate-100 outline-none text-sm flex-1"
                  />                
                </div>
              </div>
              <p className="text-right text-xs mt-1">Forgot password</p>
            </form>
          </div>
          <div className="w-full col-span-2 h-full rounded-r-md bg-indigo-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Login;