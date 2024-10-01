import axios from "axios";
import axiosService from "../helpers/axios";
import { useDispatch } from "react-redux";
import { setItems,filterItems } from "../features/storeSlice";

function useItemActions() {
    const baseURL = `${process.env.REACT_APP_API_BASE_URL}`;
    const dispatch = useDispatch()

    return {
        getAllItems,
        getAllItemsWithAuth,
        setFiltered,
    };

    function getAllItems() {
        return axios.get(`${baseURL}/store/`).then((res) => {
            dispatch(setItems(res.data))
        })
    }

    function getAllItemsWithAuth() {
        return axiosService.get(`${baseURL}/store/`).then((res) => {
            dispatch(setItems(res.data))
        })
    }
    function setFiltered(data){
        dispatch(filterItems(data))
    }

}
export { useItemActions };