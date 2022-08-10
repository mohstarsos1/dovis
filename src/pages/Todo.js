import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Textbox from "../components/Textbox";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    const items = localStorage.getItem("tasks");
    if (items) {
      setTasks(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleClick = async () => {
    setTasks([...tasks, itemName]);
    setItemName("");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[80px]">
      <div className="w-1/3">
        <h1 className="text-lg font-bold text-center">To Do List</h1>
        <div className="flex mt-6 items-center justify-center">
          <Textbox
            placeholder="Item name..."
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
            autoFocus
          />
          <Button type="primary" size="sm" onClick={() => handleClick()}>
            Add Item
          </Button>
        </div>
        <div className="items-start justify-start mt-6">
          <ol className="list-disc list-inside">
            {tasks?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Todo;
