import React, { useRef, useState } from 'react'



const ImageUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const formRef = useRef();
    const inputRef = useRef();
    const btnRef = useRef();
    let currnentfile = {};

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // setSelectedFile(file);
        currnentfile = file;3
     


        btnRef.current.click();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (currnentfile) {
            // dispatch(avatarStudent(selectedFile));
            dispatch(avatarStudent(currnentfile));
        } else {
            console.warn("No file selected");
        }
    };

    const handleClick = () => {
        inputRef.current.click();
    };
    return (
        <>
            {/* <div
                onClick={handleClick}
                className="w-full h-[100px] flex items-center justify-center text-2xl rounded-full "
            >
                {Admin?.avatar.url ? (
                    <img
                        src={Admin.avatar.url}
                        className="w-[100px] h-[100px] rounded-full"
                        alt=""
                    />
                ) : (
                    <IoIosCamera className="text-[#8C8594]" />
                )}
            </div> */}
            <button onClick={handleClick}>avater</button>
            <form ref={formRef} onSubmit={handleSubmit} className="">
                <input
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                />
                <button ref={btnRef} type="submit">
                    Submit
                </button>
            </form>
            
            
            </>
    )
}

export default ImageUpload