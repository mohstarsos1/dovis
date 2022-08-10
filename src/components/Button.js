function Button({ children, onClick, size, type }) {
  const ButtonType = {
    basic:
      "bg-white active:bg-gray-200 text-gray-700 font-bold rounded whitespace-nowrap shadow-lg",
    primary:
      "bg-blue-700 active:bg-blue-500 text-white font-bold rounded whitespace-nowrap shadow-lg",
    delete:
      "bg-red-500 active:bg-red-300 text-white font-bold rounded whitespace-nowrap shadow-lg",
    transparent: "whitespace-nowrap",
  };

  const ButtonSize = {
    sm: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  };

  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
