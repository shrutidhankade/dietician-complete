import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { asyncsignup } from '../store/Actions/userAction'


const Signup = () => {
    const [formData, setLocalFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncsignup(formData));


        navigate("/Admin")

    };

    return (
        // <div className='w-full h-[110vh] flex flex-col  items-center  '>

        //     <div className='absolute top-20 ml-16  '>
        //         <h1 className='text-5xl -ml-12 font-bold pt-10'>Sign-up and apply for free</h1>


        //         <div className='w-[31vw] h-[65%]  border-2 border-[#00A5EC] border-opacity-30 mt-10'>
        //             <form onSubmit={handleSubmit} className='flex flex-col mt-10 p-2'>

        //                 <h1 className='ml-5'>name</h1>

        //                 <input

        //                     type="name"
        //                     name='name'
        //                     onChange={handleChange}
        //                     placeholder='john'
        //                     className='w-[91%] p-2 ml-[5%]  border-2   rounded-[5px] ' />
        //                 <br />
        //                 <h1 className='ml-5'>Email</h1>

        //                 <input

        //                     type="email"
        //                     name='email'
        //                     onChange={handleChange}
        //                     placeholder='john@example.com'
        //                     className='w-[91%] p-2 ml-[5%]  border-2   rounded-[5px] ' />
        //                 <br />


        //                 <h1 className='ml-5'>Password</h1>

        //                 <input type="password" name='password'
        //                     placeholder='Must be atleast 6 characters'
        //                     onChange={handleChange}
        //                     className='w-[91%] p-2 ml-[5%]  border-2  rounded-[5px]  ' /><br />

        //                 <button type='submit' className='bg-[#00A5EC] p-2 w-[91%] ml-[5%] text-white rounded-[5px] ' >Sign up</button>

        //                 <h1 className='p-5 text-center font-semibold'>Already registered? <Link className='text-[#00A5EC]' to="/signin">Login</Link></h1>
        //             </form>



        //         </div></div>

        // </div>

        <>
            {/* component */}

            <>
                {/* component */}
                <div className="bg-white relative lg:-mt-2">
                    <div
                        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
xl:px-5 lg:flex-row"
                    >
                        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                                    <img
                                        src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                                        className="btn-"
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-20 mr-0 mb-0 ml-0  relative z-10 max-w-2xl lg:mt-0 lg:w-[35vw]">
                                <div
                                    className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
      relative z-10"
                                >
                                    <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                                        Sign up for an account
                                    </p>

                                    <form onSubmit={handleSubmit} className='flex flex-col mt-10 p-2'>
                                        <h1 className='ml-5'>username</h1>

                                        <input type="username" name='username'
                                            placeholder='Must be atleast 6 characters'
                                            onChange={handleChange}
                                            className='w-[100%] p-2 ml-[5%]  border-2  rounded-[5px]  ' /><br />
                                        <h1 className='ml-5'>Email</h1>

                                        <input

                                            type="email"
                                            name='email'
                                            onChange={handleChange}
                                            placeholder='john@example.com'
                                            className='w-[100%] p-2 ml-[5%]  border-2   rounded-[5px] ' />
                                        <br />


                                        <h1 className='ml-5'>Password</h1>

                                        <input type="password" name='password'
                                            placeholder='Must be atleast 6 characters'
                                            onChange={handleChange}
                                            className='w-[100%] p-2 ml-[5%]  border-2  rounded-[5px]  ' /><br />





                                        <p className='p-5 text-[0.9vw]'>By signing up, you agree to our <span className='text-[#6366F1]'>Terms and Conditions</span>.</p>

                                        <button type='submit' className='bg-[#6366F1] p-2 w-[100%] ml-[5%] text-white rounded-[5px] ' >Sign up</button>

                                        <h1 className='p-5 text-center font-semibold'>Already registered? <Link className='text-[#6366F1]' to="/signin">Login</Link></h1>
                                    </form>

                                </div>
                                <svg
                                    viewBox="0 0 91 91"
                                    className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
      fill-current"
                                >
                                    <g stroke="none" strokewidth={1} fillrule="evenodd">
                                        <g fillrule="nonzero">
                                            <g>
                                                <g>
                                                    <circle cx="3.261" cy="3.445" r="2.72" />
                                                    <circle cx="15.296" cy="3.445" r="2.719" />
                                                    <circle cx="27.333" cy="3.445" r="2.72" />
                                                    <circle cx="39.369" cy="3.445" r="2.72" />
                                                    <circle cx="51.405" cy="3.445" r="2.72" />
                                                    <circle cx="63.441" cy="3.445" r="2.72" />
                                                    <circle cx="75.479" cy="3.445" r="2.72" />
                                                    <circle cx="87.514" cy="3.445" r="2.719" />
                                                </g>
                                                <g transform="translate(0 12)">
                                                    <circle cx="3.261" cy="3.525" r="2.72" />
                                                    <circle cx="15.296" cy="3.525" r="2.719" />
                                                    <circle cx="27.333" cy="3.525" r="2.72" />
                                                    <circle cx="39.369" cy="3.525" r="2.72" />
                                                    <circle cx="51.405" cy="3.525" r="2.72" />
                                                    <circle cx="63.441" cy="3.525" r="2.72" />
                                                    <circle cx="75.479" cy="3.525" r="2.72" />
                                                    <circle cx="87.514" cy="3.525" r="2.719" />
                                                </g>
                                                <g transform="translate(0 24)">
                                                    <circle cx="3.261" cy="3.605" r="2.72" />
                                                    <circle cx="15.296" cy="3.605" r="2.719" />
                                                    <circle cx="27.333" cy="3.605" r="2.72" />
                                                    <circle cx="39.369" cy="3.605" r="2.72" />
                                                    <circle cx="51.405" cy="3.605" r="2.72" />
                                                    <circle cx="63.441" cy="3.605" r="2.72" />
                                                    <circle cx="75.479" cy="3.605" r="2.72" />
                                                    <circle cx="87.514" cy="3.605" r="2.719" />
                                                </g>
                                                <g transform="translate(0 36)">
                                                    <circle cx="3.261" cy="3.686" r="2.72" />
                                                    <circle cx="15.296" cy="3.686" r="2.719" />
                                                    <circle cx="27.333" cy="3.686" r="2.72" />
                                                    <circle cx="39.369" cy="3.686" r="2.72" />
                                                    <circle cx="51.405" cy="3.686" r="2.72" />
                                                    <circle cx="63.441" cy="3.686" r="2.72" />
                                                    <circle cx="75.479" cy="3.686" r="2.72" />
                                                    <circle cx="87.514" cy="3.686" r="2.719" />
                                                </g>
                                                <g transform="translate(0 49)">
                                                    <circle cx="3.261" cy="2.767" r="2.72" />
                                                    <circle cx="15.296" cy="2.767" r="2.719" />
                                                    <circle cx="27.333" cy="2.767" r="2.72" />
                                                    <circle cx="39.369" cy="2.767" r="2.72" />
                                                    <circle cx="51.405" cy="2.767" r="2.72" />
                                                    <circle cx="63.441" cy="2.767" r="2.72" />
                                                    <circle cx="75.479" cy="2.767" r="2.72" />
                                                    <circle cx="87.514" cy="2.767" r="2.719" />
                                                </g>
                                                <g transform="translate(0 61)">
                                                    <circle cx="3.261" cy="2.846" r="2.72" />
                                                    <circle cx="15.296" cy="2.846" r="2.719" />
                                                    <circle cx="27.333" cy="2.846" r="2.72" />
                                                    <circle cx="39.369" cy="2.846" r="2.72" />
                                                    <circle cx="51.405" cy="2.846" r="2.72" />
                                                    <circle cx="63.441" cy="2.846" r="2.72" />
                                                    <circle cx="75.479" cy="2.846" r="2.72" />
                                                    <circle cx="87.514" cy="2.846" r="2.719" />
                                                </g>
                                                <g transform="translate(0 73)">
                                                    <circle cx="3.261" cy="2.926" r="2.72" />
                                                    <circle cx="15.296" cy="2.926" r="2.719" />
                                                    <circle cx="27.333" cy="2.926" r="2.72" />
                                                    <circle cx="39.369" cy="2.926" r="2.72" />
                                                    <circle cx="51.405" cy="2.926" r="2.72" />
                                                    <circle cx="63.441" cy="2.926" r="2.72" />
                                                    <circle cx="75.479" cy="2.926" r="2.72" />
                                                    <circle cx="87.514" cy="2.926" r="2.719" />
                                                </g>
                                                <g transform="translate(0 85)">
                                                    <circle cx="3.261" cy="3.006" r="2.72" />
                                                    <circle cx="15.296" cy="3.006" r="2.719" />
                                                    <circle cx="27.333" cy="3.006" r="2.72" />
                                                    <circle cx="39.369" cy="3.006" r="2.72" />
                                                    <circle cx="51.405" cy="3.006" r="2.72" />
                                                    <circle cx="63.441" cy="3.006" r="2.72" />
                                                    <circle cx="75.479" cy="3.006" r="2.72" />
                                                    <circle cx="87.514" cy="3.006" r="2.719" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    viewBox="0 0 91 91"
                                    className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
      fill-current"
                                >
                                    <g stroke="none" strokewidth={1} fillrule="evenodd">
                                        <g fillrule="nonzero">
                                            <g>
                                                <g>
                                                    <circle cx="3.261" cy="3.445" r="2.72" />
                                                    <circle cx="15.296" cy="3.445" r="2.719" />
                                                    <circle cx="27.333" cy="3.445" r="2.72" />
                                                    <circle cx="39.369" cy="3.445" r="2.72" />
                                                    <circle cx="51.405" cy="3.445" r="2.72" />
                                                    <circle cx="63.441" cy="3.445" r="2.72" />
                                                    <circle cx="75.479" cy="3.445" r="2.72" />
                                                    <circle cx="87.514" cy="3.445" r="2.719" />
                                                </g>
                                                <g transform="translate(0 12)">
                                                    <circle cx="3.261" cy="3.525" r="2.72" />
                                                    <circle cx="15.296" cy="3.525" r="2.719" />
                                                    <circle cx="27.333" cy="3.525" r="2.72" />
                                                    <circle cx="39.369" cy="3.525" r="2.72" />
                                                    <circle cx="51.405" cy="3.525" r="2.72" />
                                                    <circle cx="63.441" cy="3.525" r="2.72" />
                                                    <circle cx="75.479" cy="3.525" r="2.72" />
                                                    <circle cx="87.514" cy="3.525" r="2.719" />
                                                </g>
                                                <g transform="translate(0 24)">
                                                    <circle cx="3.261" cy="3.605" r="2.72" />
                                                    <circle cx="15.296" cy="3.605" r="2.719" />
                                                    <circle cx="27.333" cy="3.605" r="2.72" />
                                                    <circle cx="39.369" cy="3.605" r="2.72" />
                                                    <circle cx="51.405" cy="3.605" r="2.72" />
                                                    <circle cx="63.441" cy="3.605" r="2.72" />
                                                    <circle cx="75.479" cy="3.605" r="2.72" />
                                                    <circle cx="87.514" cy="3.605" r="2.719" />
                                                </g>
                                                <g transform="translate(0 36)">
                                                    <circle cx="3.261" cy="3.686" r="2.72" />
                                                    <circle cx="15.296" cy="3.686" r="2.719" />
                                                    <circle cx="27.333" cy="3.686" r="2.72" />
                                                    <circle cx="39.369" cy="3.686" r="2.72" />
                                                    <circle cx="51.405" cy="3.686" r="2.72" />
                                                    <circle cx="63.441" cy="3.686" r="2.72" />
                                                    <circle cx="75.479" cy="3.686" r="2.72" />
                                                    <circle cx="87.514" cy="3.686" r="2.719" />
                                                </g>
                                                <g transform="translate(0 49)">
                                                    <circle cx="3.261" cy="2.767" r="2.72" />
                                                    <circle cx="15.296" cy="2.767" r="2.719" />
                                                    <circle cx="27.333" cy="2.767" r="2.72" />
                                                    <circle cx="39.369" cy="2.767" r="2.72" />
                                                    <circle cx="51.405" cy="2.767" r="2.72" />
                                                    <circle cx="63.441" cy="2.767" r="2.72" />
                                                    <circle cx="75.479" cy="2.767" r="2.72" />
                                                    <circle cx="87.514" cy="2.767" r="2.719" />
                                                </g>
                                                <g transform="translate(0 61)">
                                                    <circle cx="3.261" cy="2.846" r="2.72" />
                                                    <circle cx="15.296" cy="2.846" r="2.719" />
                                                    <circle cx="27.333" cy="2.846" r="2.72" />
                                                    <circle cx="39.369" cy="2.846" r="2.72" />
                                                    <circle cx="51.405" cy="2.846" r="2.72" />
                                                    <circle cx="63.441" cy="2.846" r="2.72" />
                                                    <circle cx="75.479" cy="2.846" r="2.72" />
                                                    <circle cx="87.514" cy="2.846" r="2.719" />
                                                </g>
                                                <g transform="translate(0 73)">
                                                    <circle cx="3.261" cy="2.926" r="2.72" />
                                                    <circle cx="15.296" cy="2.926" r="2.719" />
                                                    <circle cx="27.333" cy="2.926" r="2.72" />
                                                    <circle cx="39.369" cy="2.926" r="2.72" />
                                                    <circle cx="51.405" cy="2.926" r="2.72" />
                                                    <circle cx="63.441" cy="2.926" r="2.72" />
                                                    <circle cx="75.479" cy="2.926" r="2.72" />
                                                    <circle cx="87.514" cy="2.926" r="2.719" />
                                                </g>
                                                <g transform="translate(0 85)">
                                                    <circle cx="3.261" cy="3.006" r="2.72" />
                                                    <circle cx="15.296" cy="3.006" r="2.719" />
                                                    <circle cx="27.333" cy="3.006" r="2.72" />
                                                    <circle cx="39.369" cy="3.006" r="2.72" />
                                                    <circle cx="51.405" cy="3.006" r="2.72" />
                                                    <circle cx="63.441" cy="3.006" r="2.72" />
                                                    <circle cx="75.479" cy="3.006" r="2.72" />
                                                    <circle cx="87.514" cy="3.006" r="2.719" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </>




    )
}

export default Signup





// <form onSubmit={handleSubmit}>
// <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
//     <div className="relative">
//         <p
//             className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
// absolute"
//         >
//             Username
//         </p>
//         <input
//             placeholder="John"
//             type="text"
//             onChange={handleChange}
//             className="border placeholder-gray-400 focus:outline-none
// focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
// border-gray-300 rounded-md"
//         />
//     </div>
//     <div className="relative">
//         <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
//             Email
//         </p>
//         <input
//             placeholder="123@ex.com"
//             type="text"
//             onChange={handleChange}
//             className="border placeholder-gray-400 focus:outline-none
// focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
// border-gray-300 rounded-md"
//         />
//     </div>
//     <div className="relative">
//         <p
//             className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
// absolute"
//         >
//             Password
//         </p>
//         <input
//             placeholder="Password"
//             type="password"
//             onChange={handleChange}
//             className="border placeholder-gray-400 focus:outline-none
// focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
// border-gray-300 rounded-md"
//         />
//     </div>
//     <div className="relative">
//         <button
//             className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
// rounded-lg transition duration-200 hover:bg-indigo-600 ease"
//         >
//             Submit
//         </button>
//     </div>
// </div>
// </form>



