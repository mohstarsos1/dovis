import React from "react";

function Button({ children, onClick, size }) {
  return (
    <button
      onClick={onClick}
      className={`p-1 px-2 bg-teal-800 rounded shadow-lg text-white hover:bg-teal-600 hover:cursor-pointer active:bg-teal-500 transition-all ${
        size === "lg" ? "text-2xl p-3 px-4" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
