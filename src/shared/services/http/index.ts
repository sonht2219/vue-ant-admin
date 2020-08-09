import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import { buildRequestHeader } from "@/shared/services/helper/utils";
import { notification } from "ant-design-vue";

const http: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 6000
});

const errorHandler = (error: any) => {
    if (error?.response?.status === 401) {
        notification.error({
            message: "Bạn chưa xác thực",
            description: "Vui lòng đăng nhập lại"
        });
        // logout, redirect login
    }
};

http.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = buildRequestHeader();
    return config;
}, errorHandler);

http.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, errorHandler);

export default http