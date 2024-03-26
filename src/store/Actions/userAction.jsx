import axios from "../../config/axios";
import { removeuser, saveuser } from "../Reducer/userReducer";

// export const asynccurrentuser = () => async (dispatch, getState) => {
//    try {
//     try {

//         const { data } = await axios.post("/student",)
//         dispatch(saveuser(data.student));
//         console.log(data);

//     } catch (error) {
//         console.log(error.response);
//     }
//    } catch (error) {

//    }

// }



export const asyncsignup = (user) => async (dispatch, getState) => {
    try {

        const { data } = await axios.post("/admin/signup", user)
        dispatch(saveuser(data.admin));
        console.log(data);


    } catch (error) {
        console.log(error);
    }

}

export const asyncsignin = (user) => async (dispatch, getState) => {
    try {

        const { data } = await axios.post("/admin/signin", user)
        dispatch(saveuser(data.admin));
        console.log(data);


    } catch (error) {
        console.log(error.response.data);
    }

}

export const asyncremoveuser = () => async (dispatch, getState) => {
    try {

        await axios.get("/admin/signout")
        dispatch(removeuser());


    } catch (error) {
        console.log(error.response.data);
    }

}


export const asyncsendmail = (user) => async (dispatch, getState) => {
    try {

        const { data } = await axios.post("/admin/send-mail", user)
        dispatch(saveuser(data.admin._id));
        console.log(data.admin._id);



    } catch (error) {
        console.log(error);
    }

}

export const asyncverifymail = (user, id) => async (dispatch, getState) => {
    try {

        const { data } = await axios.post(`/admin/forget-link/${id}`, user)
        dispatch(saveuser(data.admin._id));
        console.log(data.admin._id);



    } catch (error) {
        console.log(error);
    }

}




export const resetPassword = (password, id) => async (dispatch) => {
    if (!id) return;
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/forget-link/${id}`, { password }, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}