import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        loading: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.userInfo = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export const loginUser = (username, password) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post('/api/login', { username, password });
        dispatch(loginSuccess(response.data.user));
    } catch (error) {
        dispatch(loginFailure(error.response.data.message));
    }
};

export default userSlice.reducer;

