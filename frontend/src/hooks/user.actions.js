import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startSession, closeSession, selectCurrentUser, updateUser } from "../features/session/sessionSlice";

function useUserActions() {
    const navigate = useNavigate();
    const baseURL = `${process.env.REACT_APP_API_BASE_URL}`;
    const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)

    return {
        login,
        register,
        refreshUserData,
        logout,
    };

    // Login the user
    function login(data) {
        return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
            // Registering the account and tokens in the store
            dispatch(startSession(res.data))
            navigate("/");
        })
    }

    // Register the user
    function register(data) {
        return axios.post(`${baseURL}/auth/register/`, data).then((res) => {
            // Registering the account and tokens in the store
            dispatch(startSession(res.data))
            navigate("/");
        });
    }


    function refreshUserData() {
        return axios.get(`/user/${user.id}/`).then((res) =>
            dispatch(updateUser(res.data.user))
        );
    }
    // Logout the user
    function logout() {
        dispatch(closeSession())
        navigate("/");
    }
}



export { useUserActions };