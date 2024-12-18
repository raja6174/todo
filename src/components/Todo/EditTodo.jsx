import React, { useContext, useState } from "react";
import DropDown from "./DropDown";
import myContext from "../../TodoContext";
import { v4 as uuidv4 } from "uuid";

const EditTodo = ({name,start,end,category}) => {
  const [todo, setTodo] = useState(name);
  const [dueDate, setDueDate] = useState(end);
  const [startDate, setStartDate] = useState(start);
  const [selectedDropDown, setSelectedDropDown] = useState(category);

  const {
    collections,
    setCollections,
    setActiveCollection,
    activeCollection,
    isEditable,
    setIsEditable,
  } = useContext(myContext);

  const handleDrop = (option) => {
    setSelectedDropDown(option);
  };

  const handleCancel = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = () => {
    if (todo && dueDate && startDate && selectedDropDown && activeCollection) {
      const updatedCollections = collections.map((col) => {
        if (col.id === activeCollection.id) {
          return {
            ...col,
            todos: col.todos.map((task) =>
              task.id === activeCollection.editingTodoId // Assuming `editingTodoId` is passed to identify the task
                ? { ...task, name: todo, start: startDate, end: dueDate, category: selectedDropDown }
                : task
            ),
          };
        }
        return col;
      });
  
      const updatedActiveCollection = updatedCollections.find(
        (col) => col.id === activeCollection.id
      );
  
      setCollections(updatedCollections);
      setActiveCollection(updatedActiveCollection);
  
      // Reset form
      setTodo("");
      setStartDate("");
      setDueDate("");
      setSelectedDropDown("");
      setIsEditable(false);
    } else {
      alert("Please fill out all fields!");
    }
  };
  
  if (!isEditable) return null;

  return (
    <div className="inset-0 fixed bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="sm:w-[90%] md:w-[700px] flex flex-col bg-white border border-gray-400 rounded-xl p-4 md:px-6">
        <h1 className="text-blue-600 m-2 text-lg md:text-xl">Edit Task</h1>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div>
          <h4 className="m-2 text-sm md:text-base">Name of the task</h4>
          <input
            type="text"
            className="border rounded border-gray-300 focus:outline-none w-full m-2 p-2 text-sm md:text-base"
            placeholder="Text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <h4 className="my-3 text-sm md:text-base">Start Date</h4>
            <input
              className="w-full md:w-60 h-12 border border-gray-300 rounded-lg px-4 text-sm"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <h4 className="my-3 text-sm md:text-base">End Date</h4>
            <input
              className="w-full md:w-60 h-12 border border-gray-300 rounded-lg px-4 text-sm"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full my-3">
          <h4 className="my-3 text-sm md:text-base">Status</h4>
          <DropDown handleDropDown={handleDrop} />
        </div>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-blue-500 bg-opacity-30 rounded-lg text-blue-600 text-sm md:text-base"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 rounded-lg text-white text-sm md:text-base"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
