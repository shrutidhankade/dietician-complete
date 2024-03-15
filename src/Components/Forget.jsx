import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { asyncsendmail } from '../store/Actions/userAction';


const Forget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setLocalFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncsendmail(formData));

    // Accept: "application/json, text/plain, */*"
    // Content - Type; "application/json"

    navigate(`/signin`)


  };
  return (
    <div className=' w-full  flex flex-col  items-center'>
      <div className='w-[27vw] h-[55vh] border-2  mt-10 border-[#6366F1] border-opacity-30  '>
        <h1 className='font-bold text-xl mt-5 text-center text-zinc-700'>Forgot Password</h1>

        {/* <div className='flex items-center gap-8 mt-2 ' >
          <h2 className='ml-8 mt-3 font-semibold text-zinc-700'>You are</h2>
          <div className='flex mt-3 items-center gap-7'>

          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                fontWeight: e.isActive ? "bold" : "",
                textDecoration: e.isActive ? "underline" : "",
                fontWeight: e.isActive ? "500" : "",

              };
            }}
            to="/Forget" 
          >
         <h1 className='text-[1.1vw]'>  Student/Tnp head</h1>
          </NavLink>

          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                fontWeight: e.isActive ? "bold" : "",
                textDecoration: e.isActive ? "underline" : "",
              };
            }}
            to="/EmployeForget"> <h1 className='text-[1.1vw]'>Employer</h1>
          </NavLink>

           
          </div>
        </div> */}

        <p className='mt-5 ml-8 text-zinc-600 leading-[2vw] tracking-tight'>Please enter your e-mail address. You will receive an <br /> e-mail along with a link which can be used to reset <br /> your password.</p>


        <form onSubmit={handleSubmit} className='flex flex-col mt-3 p-2'>
          <h1 className='ml-6'>Email</h1>

          <input

            type="email"
            name='email'
            onChange={handleChange}
            placeholder='john@example.com'
            className='w-[91%] p-2 ml-[5%]  border-2 mb-3  rounded-[5px] ' />




          <button type='submit' className='bg-[#6366F1] p-2 w-[91%] ml-[5%] text-white rounded-[5px] ' >submit</button>
          <p className='mt-3 ml-6'>I am not receiving password reset email. <span className='text-[#6366F1] font-bold '>Need help?</span></p>


        </form>
      </div>
    </div>
  )
}

export default Forget