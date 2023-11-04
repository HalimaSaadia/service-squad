const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="btn px-10 font-bold text-white rounded-md bg-gradient-to-br from-[#EE0D26] to-[#FBD32C] "
    >
      {text}
    </button>
  );
};

export default Button;
