import React from "react";
import Button from "../components/Button";

function Todo() {
  return (
    <div className="flex flex-col items-center justify-center pt-[80px]">
      <div className="w-1/3">
        <h1 className="text-lg font-bold text-center">To Do List</h1>
        <div className="flex mt-6 items-center justify-center">
          <input
            type="text"
            autoFocus
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:outline-none w-full"
            placeholder="Item name ..."
          />
          <Button type="primary" size="sm">
            Add Item
          </Button>
        </div>
        <div className="items-start justify-start mt-6">
          <ol className="list-decimal list-inside">
            <li>sdkfjkldj</li>
            <li>sdkfjkldj</li>
            <li>sdkfjkldj</li>
            <li>sdkfjkldj</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Todo;
