import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import store from "../app/store";
import { closeSession, refreshSession } from "../features/session/sessionSlice";


const axiosService = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

const axiosServiceWithoutAuth = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
})
axiosService.interceptors.request.use(async (config) => {
    const state = store.getState()
    const accessToken = state.session.accessToken
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

axiosService.interceptors.response.use(
    (res) => Promise.resolve(res),
    (err) => Promise.reject(err)
);

const refreshAuthLogic = async (failedRequest) => {
    const state = store.getState()
    const refreshToken = state.session.refreshToken

    return axios
        .post(
            "/auth/refresh/",
            {
                refresh: refreshToken,
            },
            {
                baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
            }
        )
        .then((resp) => {
            const { access } = resp.data;
            failedRequest.response.config.headers["Authorization"] =
                "Bearer " + access;

            store.dispatch(refreshSession(resp.data))
        })
        .catch(() => {

            store.dispatch(closeSession())
        });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {
    return axiosService.get(url).then((res) => res.data);
}

export function postWithCredentials(url, data) {
   
    return axiosService.post(url, data)
    .then((res) => res.data);
}

export function fetcherWithoutAuth(url) {
    return axiosServiceWithoutAuth.get(url).then((res) => res.data);
}



export default axiosService;