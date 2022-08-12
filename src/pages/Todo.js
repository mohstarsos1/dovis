import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import classNames from "classnames";

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

  const handleAddClick = () => {
    setTasks([...tasks, { name: itemName, isComplete: false }]);
    setItemName("");
  };

  const handleItemClick = (idx) => {
    const newTasks = [...tasks];
    newTasks[idx].isComplete = !newTasks[idx].isComplete;
    setTasks(newTasks);
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
          <Button type="primary" size="sm" onClick={() => handleAddClick()}>
            Add Item
          </Button>
        </div>
        <div className="items-start justify-start mt-6">
          <ol className="list-disc list-inside">
            {tasks?.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleItemClick(idx)}
                className={classNames(
                  {
                    "line-through text-green-500": item.isComplete,
                  },
                  "cursor-pointer hover:text-green-500 transition-all"
                )}
              >
                {item.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Todo;
