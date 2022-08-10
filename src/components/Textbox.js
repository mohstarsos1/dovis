import React from "react";

function Textbox({ placeholder, autoFocus }) {
  return (
    <input
      type="text"
      autoFocus={autoFocus}
      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:outline-none w-full"
      placeholder={placeholder}
    />
  );
}

export default Textbox;
