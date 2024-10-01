import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        user: {},
        accessToken:null,
        refreshToken:null,
        isLoggedIn: false,
        isSuperUser:false
    },
    reducers: {
        startSession: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.access;
            state.refreshToken = action.payload.refresh;
            state.isLoggedIn = true;
            state.isSuperUser =  action.payload.user.is_superuser
        },
        refreshSession:(state, action) => {
            state.accessToken = action.payload.access;
        },
        updateUser: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.access;
            state.refreshToken = action.payload.refresh;
            state.isLoggedIn = true;
            state.isSuperUser =  action.payload.user.is_superuser
        },
        closeSession: (state, action) => {
            state.user = {};
            state.accessToken =null
            state.refreshToken =null
            state.isLoggedIn = false;
            state.isSuperUser =  false
        }
    }
})

export const selectCurrentUser = (state) => state.session.user;
export const selectIsSuperUser = (state) => state.session.isSuperUser;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const selectAccessToken = (state) => state.session.accessToken;
export const selectrefreshToken = (state) => state.session.refreshToken;
export const { startSession, closeSession,updateUser,refreshSession} = sessionSlice.actions;
export default sessionSlice.reducer;