import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import SectionHeading from "../../shared/SectionHeading";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { dynamicTitle } from "../../../utils/dynamicTitle";

const Login = () => {
  dynamicTitle("Login - ServiceSquad")
  const [isOpen, setIsOpen] = useState(false);
  const { login, loginWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const toastId = toast.loading("LogIn In process..")
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        toast.success("successfully Logged In");
        toast.remove(toastId)
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    const toastId = toast.loading("LogIn In process..")
    loginWithGoogle()
    .then(result => {
      toast.success("successfully Logged In");
       toast.remove(toastId)
        navigate("/")
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    });
  }

  return (
    <div
      style={{ backgroundImage: "url('https://svgshare.com/i/zGu.svg')" }}
      className="w-full min-h-screen bg-no-repeat bg-cover flex justify-center items-center"
    >
      <div className="bg-[#1E293BCC] borderStyle border-4 relative mt-12 ">
        <div className="avatar absolute -top-12 left-[32%] md:left-[40%]">
          <div className="w-24 rounded-full ring bgPrimary ring-offset-base-100 ring-offset-2">
            <AiOutlineUser className="text-8xl text-[#1F2937]" />
          </div>
        </div>
        <SectionHeading text="Login" />
        <div className=" h-full flex justify-center items-center">
          <div className="card flex-shrink-0 md:w-[500px] shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label ">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type={isOpen ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                  required
                />
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className=" absolute top-[60%] right-2 md:right-5"
                >
                  {" "}
                  {isOpen ? (
                    <AiOutlineEyeInvisible className="text-2xl" />
                  ) : (
                    <AiOutlineEye className="text-2xl" />
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <Button text="LOGIN" />
              </div>
            </form>
            <div className="flex justify-center">
              <label className="label">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-base text-white"
                >
                  Don't Have account?{" "}
                  <span className="text-blue-600  ">Register</span>
                </Link>
              </label>
            </div>
            <div>
              <div className="flex justify-center items-center space-x-5 mb-5">
                <span>Continue With</span><FcGoogle  onClick={handleGoogleLogin} className="text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
