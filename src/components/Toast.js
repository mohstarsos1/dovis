import React from "react";
import { MdCheck } from "react-icons/md";
import { MdWarningAmber } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

function Toast({ children, type }) {
  let icon;
  if (type === "success") {
    icon = <MdCheck className="text-green-500 text-2xl" />;
  }
  if (type === "warning") {
    icon = <MdWarningAmber className="text-orange-500 text-2xl" />;
  }
  if (type === "error") {
    icon = <MdClose className="text-red-500 text-2xl" />;
  }
  if (type === "info") {
    icon = <MdInfoOutline className="text-blue-500 text-2xl" />;
  }
  return (
    <div className="min-w-[250px] bg-gray-100 shadow-lg py-4 rounded px-2 font-bold absolute top-20 right-2 flex items-center">
      {icon}
      <span className="ml-2">{children}</span>
    </div>
  );
}

export default Toast;
