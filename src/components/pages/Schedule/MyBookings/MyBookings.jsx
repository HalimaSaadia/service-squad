import { useContext, useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import { AuthContext } from "../../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";

const headingStyle = {
    backgroundImage: "linear-gradient(to right, rgba(43, 77, 122, 0.5), rgba(63, 119, 179, 0.5), rgba(115, 213, 226, 0.5), rgba(129, 230, 138, 0.5), rgba(63, 119, 179, 0.5))"
}

const MyBookings = () => {
    const axiosInstance = useAxios()
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    useEffect(()=> {
        axiosInstance.get(`/api/v1/user-bookings?email=${user?.email}`)
        .then(res => {
            setBookings(res.data)
        })
    },[bookings])

    
    return (
        <div className="mb-10">
            <div style={headingStyle} className="my-5 p-2 borderStyle border-b-2">
                <h1 className="text-4xl">My Bookings</h1>
            </div>
            <div className="space-y-5">
            {bookings.map(booking =>  <BookingRow booking={booking} key={booking._id} />)}
            </div>
            
           
        </div>
    );
};

export default MyBookings;