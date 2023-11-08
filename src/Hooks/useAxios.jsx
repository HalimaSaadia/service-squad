import axios from "axios";

const axiosInstance = axios.create({
    
    baseURL: "https://11-service-squade-server.vercel.app",
    withCredentials: true
})
//http://localhost:5000
const useAxios = () => {
    return  axiosInstance
};

export default useAxios;

