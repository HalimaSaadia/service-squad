import { useContext, useState } from "react";
import Button from "../../shared/Button";
import SectionHeading from "../../shared/SectionHeading";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext} from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { dynamicTitle } from "../../../utils/dynamicTitle";

const Register = () => {
  dynamicTitle("registration - ServiceSquad")
  const [isOpen, setIsOpen] = useState(false);
  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const toastId = toast.loading("Loading...");
    console.log(email, password, name, photo);
    if (password.length < 6) {
      toast.error("password Should have at least 6 character", {
        duration: 3000,
      });
      toast.remove(toastId);
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/.test(password)) {
       toast.error(
        "password Should have at least one digit and one special character",
        { duration: 3000 }
      );
      toast.remove(toastId);
      return;
    }

    createUser(email,password)
    .then((result) => {
        updateUser(name, photo)
          .then()
          .catch((error) =>
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            })
          );
   
        toast.success("successfully Signed up")
        toast.remove(toastId)
        navigate("/");
      
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        toast.remove(toastId)
      });

   
  };
  return (
    <div
      style={{ backgroundImage: "url('https://svgshare.com/i/zGu.svg')" }}
      className="w-full  min-h-screen bg-no-repeat bg-cover flex justify-center items-center"
    >
      <div className="bg-[#1E293BCC] borderStyle border-4 relative my-12 ">
        <div className="avatar absolute -top-12 left-[32%] md:left-[40%]">
          <div className="w-24 rounded-full ring bgPrimary ring-offset-base-100 ring-offset-2">
            <AiOutlineUser className="text-8xl text-[#1F2937]" />
          </div>
        </div>
        <SectionHeading text="Register" />
        <div className=" h-full flex justify-center items-center">
          <div className="card flex-shrink-0 md:w-[500px] shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                  required
                />
              </div>
              <div className="form-control relative">
                <input
                  type={isOpen ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                  required
                />
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className=" absolute top-[20%] right-2 md:right-5"
                >
                  {" "}
                  {isOpen ? (
                    <AiOutlineEyeInvisible className="text-2xl" />
                  ) : (
                    <AiOutlineEye className="text-2xl" />
                  )}
                </div>
              </div>
              <div className="form-control">
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photo"
                  className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <Button text="Register" />
              </div>
            </form>
            <div className="flex justify-center">
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-base text-white"
                >
                  Already Have account?{" "}
                  <span className="text-blue-600">Login</span>
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
