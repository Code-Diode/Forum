import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        sign_in: (state) => {
            state.isLoggedIn = true;
        },
        sign_out: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const getUserStatus = (state) => state.user.isLoggedIn;

export const {sign_in, sign_out} = userSlice.actions;

export default userSlice.reducer;