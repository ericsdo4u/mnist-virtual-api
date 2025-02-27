
const Button = (props ) => {
  const {onClick, disabled, children} = props
  return (
    <button onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-white font-semibold transition duration-200 ease-in-out 
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
    >
      {children}
    </button>
  );
};

export default Button;
