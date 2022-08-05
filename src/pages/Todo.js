import React from "react";
import Button from "../components/Button";

function Todo() {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-lg font-bold">To Do List</h1>
      <div className="flex mt-6">
        <input
          type="text"
          autoFocus
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:outline-none w-96"
          placeholder="Item name ..."
        />
        <Button>Add Item</Button>
      </div>
    </div>
  );
}

export default Todo;
