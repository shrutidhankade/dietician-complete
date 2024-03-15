import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        saveuser: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        removeuser: (state, action) => {
            state.user = null;
            state.isAuth = false;
        },
       

    },
})

// Action creators are generated for each case reducer function
export const { saveuser, removeuser} = userSlice.actions

export default userSlice.reducer