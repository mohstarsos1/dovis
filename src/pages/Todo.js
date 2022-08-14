import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import Toast from "../components/Toast";
import { MdDeleteOutline } from "react-icons/md";
import classNames from "classnames";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [itemName, setItemName] = useState("");
  const [showToast, setShowToast] = useState(false);

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
    if (itemName) {
      setTasks([...tasks, { name: itemName, isComplete: false }]);
      setItemName("");
    }
  };

  const handleItemClick = (idx) => {
    const newTasks = [...tasks];
    newTasks[idx].isComplete = !newTasks[idx].isComplete;
    setTasks(newTasks);
  };

  const handleClearAllClick = () => {
    tasks.length > 0 ? setTasks([]) : setShowToast(true);
  };

  const handleKeypress = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleAddClick();
    }
  };

  const handleItemDelete = (idx) => {
    const newTasks = [...tasks];
    newTasks.splice(idx, 1);
    setTasks(newTasks);
  };

  // const getUncompleteTasks = () => {
  //   let count = 0;
  //   tasks.map(item=>{
  //     if(item.isComplete){
  //       count +=1;
  //     }
  //   })
  // }

  return (
    <div className="flex flex-col items-center justify-center pt-[80px]">
      <div className="w-1/3">
        <h1 className="text-lg font-bold text-center">To Do List</h1>
        <div className="flex justify-between mt-4">
          <span>All Tasks: {tasks.length}</span>
          <span>Uncomplete Tasks: {tasks.length}</span>
          <span>Complete Tasks: {tasks.length}</span>
        </div>

        <div className="flex mt-6 items-center justify-center space-x-1">
          <Textbox
            placeholder="Item name..."
            onChange={(e) => setItemName(e.target.value)}
            onKeyPress={handleKeypress}
            value={itemName}
            autoFocus
          />
          <Button type="primary" size="sm" onClick={() => handleAddClick()}>
            Add Item
          </Button>
          <Button type="delete" size="sm" onClick={() => handleClearAllClick()}>
            Clear All
          </Button>
        </div>
        <div className="items-start justify-start mt-6">
          <ol className="list-disc list-inside">
            {tasks?.map((item, idx) => (
              <li
                key={idx}
                className="justify-between flex transition-all odd:bg-gray-100"
              >
                <span
                  onClick={() => handleItemClick(idx)}
                  className={classNames(
                    {
                      "line-through text-green-500": item.isComplete,
                    },
                    "cursor-pointer hover:text-green-500 w-full"
                  )}
                >
                  {item.name}
                </span>
                <MdDeleteOutline
                  className="text-red-500 text-3xl cursor-pointer hover:text-red-200"
                  onClick={() => handleItemDelete(idx)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Toast type="error" show={showToast} setShowToast={setShowToast}>
        All item has removed.
      </Toast>
    </div>
  );
}

export default Todo;
