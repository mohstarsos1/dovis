import React from "react";
import { MdCheck } from "react-icons/md";

function Toast({ children }) {
  return (
    <div className="min-w-[250px] bg-white shadow-lg py-4 rounded px-2 font-bold absolute top-20 right-2 flex items-center">
      <MdCheck className="text-green-500 text-2xl" />
      <span className="ml-2">{children}</span>
    </div>
  );
}

export default Toast;
