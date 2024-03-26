import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { asyncverifymail } from '../store/Actions/userAction';
// import { asyncverifymail } from '../../store/Actions/userActions';

const VerifyPassword = () => {
    const { id } = useParams();
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
        dispatch(asyncverifymail(formData, id));

        Accept: "application/json, text/plain, */*"
        // Content - Type; "application/json"

        navigate("/signin")

    };



    return (
        <div className=' w-full h-[50vh] flex flex-col  items-center'>
            <div className='w-[29vw] h-[60%]  border-2 border-[#00A5EC] border-opacity-30 mt-10'>
                <form onSubmit={handleSubmit} className='flex flex-col mt-10 p-2'>
                    <h1 className='ml-5'>password</h1>

                    <input

                        type="password"
                        name='password'
                        onChange={handleChange}
                        placeholder='john@example.com'
                        className='w-[91%] p-2 ml-[5%]  border-2 mb-6  rounded-[5px] ' />

                    <button type='submit' className='bg-[#00A5EC] p-2 w-[91%] ml-[5%] text-white rounded-[5px] ' >send</button>


                </form>
            </div>
        </div>
    )
}

export default VerifyPassword