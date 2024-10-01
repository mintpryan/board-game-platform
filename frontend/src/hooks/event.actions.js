import axios from "axios";
import axiosService from "../helpers/axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllEvents } from "../features/eventSlice";
import { selectIsLoggedIn } from "../features/session/sessionSlice";

function useEventActions() {
    const baseURL = `${process.env.REACT_APP_API_BASE_URL}`;
    const dispatch = useDispatch()
    const loggenIn = useSelector(selectIsLoggedIn)

    return {
        getAllEvents,
        getEvent,
        createEvent,
        registerToEvent,
        cancelRegEvent
    };


    function getAllEvents() {
        if (loggenIn)
            return axiosService.get(`${baseURL}/event/`).then((res) => {
                dispatch(setAllEvents(res.data))
            })
        else
            return axios.get(`${baseURL}/event/`).then((res) => {
                dispatch(setAllEvents(res.data))
            })
    }

    function getEvent(data) {
        return axiosService.post(`${baseURL}/event/${data.id}`)
    }

    function createEvent(data) {
        return axiosService.post(`${baseURL}/event/`, data)
    }

    function registerToEvent(data) {
        return axiosService.post(`${baseURL}/event/${data.public_id}/register/`)
    }

    function cancelRegEvent(data) {
        return axiosService.delete(`${baseURL}/event/${data.public_id}/register/`)
    }
}
export { useEventActions };