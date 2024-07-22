import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordEyeToggle = () => {
  const [password, setPassword] = useState(true);
  return (
    <div className='main w-full h-screen flex flex-col items-center justify-center py-4 px-12 bg-red-300 space-y-4'>
      <h1 className='text-3xl font-bold'>Password Eye Toggle Show-Off Functionality</h1>
      <div className="inner bg-green-200 border border-red-400 rounded-full px-4 py-2 flex items-center justify-center">
        <input type={`${password ? "password" :"text"}`} placeholder='Password' className='outline-none bg-transparent ' />
        <p onClick={()=>setPassword(!password)} className='cursor-pointer text-xl'>
          {password ? <FaEye />
          : <FaEyeSlash />}
        </p>
      </div>
    </div>
  )
}

export default PasswordEyeToggle