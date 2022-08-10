import React from "react";
import Button from "../components/Button";
import Textbox from "../components/Textbox";

function Todo() {
  return (
    <div className="flex flex-col items-center justify-center pt-[80px]">
      <div className="w-1/3">
        <h1 className="text-lg font-bold text-center">To Do List</h1>
        <div className="flex mt-6 items-center justify-center">
          <Textbox placeholder="Item name..." autoFocus />
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
