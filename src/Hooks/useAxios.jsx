import axios from "axios";

const axiosInstance = axios.create({
    
    baseURL: "http://localhost:5000",
    withCredentials: true
})
// https://11-service-squade-server.vercel.app
const useAxios = () => {
    return  axiosInstance
};

export default useAxios;

