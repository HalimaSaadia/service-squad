import { useContext, useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import { AuthContext } from "../../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import { FadeLoader } from "react-spinners";

const headingStyle = {
    backgroundImage: "linear-gradient(to right, rgba(43, 77, 122, 0.5), rgba(63, 119, 179, 0.5), rgba(115, 213, 226, 0.5), rgba(129, 230, 138, 0.5), rgba(63, 119, 179, 0.5))"
}

const MyBookings = () => {
    const axiosInstance = useAxios()
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        axiosInstance.get(`/api/v1/user-bookings?email=${user?.email}`)
        .then(res => {
            setBookings(res.data)
            setLoading(false)
        })
    },[bookings])

    
    return (
        <div className="mb-10">
            {
                bookings?.length ?<><div style={headingStyle} className="my-5 p-2 borderStyle border-b-2">
                <h1 className="text-4xl">My Bookings</h1>
            </div>
            <div className="space-y-5">
            {loading ? <FadeLoader loading={true} size={150} color="#3F51B5" aria-label="Loading Spinner" data-testid="loader" /> :bookings.map(booking =>  <BookingRow booking={booking} key={booking._id} />)}
            </div></> : <div style={headingStyle} className="my-5 p-2 borderStyle border-b-2">
                <h1 className="text-4xl">No Bookings</h1>
            </div>
            }
            
            
           
        </div>
    );
};

export default MyBookings;