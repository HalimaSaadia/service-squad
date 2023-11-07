import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../../Hooks/useAxios";
import PendingWorkRow from "./PendingWorkRow";

const headingStyle = {
    backgroundImage: "linear-gradient(to right, rgba(43, 77, 122, 0.5), rgba(63, 119, 179, 0.5), rgba(115, 213, 226, 0.5), rgba(129, 230, 138, 0.5), rgba(63, 119, 179, 0.5))"
}
const PendingWork = () => {
    const [pendingWorks, setPendingWorks] = useState([])
    const {user} = useContext(AuthContext)
    const axiosInstance =useAxios()
    const email = user?.email
    useEffect(()=> {
        axiosInstance.get(`/api/v1/user-pendingWorks?email=${email}`)
        .then(res => {
            setPendingWorks(res.data)
        })
    },[pendingWorks])
    console.log(pendingWorks)
    return (
        <div>
             <div style={headingStyle} className="my-5 p-2 borderStyle border-b-2">
                <h1 className="text-4xl">My Pending Work</h1>
            </div>
            
            {
                 <div className="space-y-5">
                 {pendingWorks.map(pendingWork =>  <PendingWorkRow pendingWork={pendingWork} key={pendingWork._id} />)}
                 </div>
            }
        </div>
    );
};

export default PendingWork;