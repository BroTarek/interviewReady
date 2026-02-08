import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios"

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com", // default placeholder
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

// Request Interceptor
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Add Authorization header here if needed
        // const token = localStorage.getItem("token");
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`)
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// Response Interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log(`[Response] ${response.status} ${response.config.url}`)
        return response
    },
    (error: AxiosError) => {
        console.error(`[Error] ${error.message}`)
        if (error.response?.status === 401) {
            // Handle unauthorized access (e.g., redirect to login)
            console.warn("Unauthorized access - redirecting to login...")
        }
        return Promise.reject(error)
    }
)

export default api
