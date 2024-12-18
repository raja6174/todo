import React, { useContext, useState } from "react";
import DropDown from "./DropDown";
import myContext from "../../TodoContext";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [selectedDropDown, setSelectedDropDown] = useState("");

  const {
    collections,
    setCollections,
    setActiveCollection,
    activeCollection,
    isModalOpen,
    setIsModalOpen,
  } = useContext(myContext);

  const handleDrop = (option) => {
    setSelectedDropDown(option);
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = () => {
    if (todo && dueDate && startDate && selectedDropDown && activeCollection) {
      const updatedCollections = collections.map((col) => {
        if (col.id === activeCollection.id) {
          return {
            ...col,
            todos: [
              ...col.todos,
              {
                id: uuidv4(),
                name: todo,
                start: startDate,
                end: dueDate,
                category: selectedDropDown,
              },
            ],
          };
        }
        return col;
      });

      const updatedActiveCollection = updatedCollections.find(
        (col) => col.id === activeCollection.id
      );

      setCollections(updatedCollections);
      setActiveCollection(updatedActiveCollection);

      setTodo("");
      setDueDate("");
      setIsModalOpen(!isModalOpen);
    } else {
      alert("Please fill out all fields and select a collection!");
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="inset-0 fixed bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="sm:w-[90%] md:w-[700px] flex flex-col bg-white border border-gray-400 rounded-xl p-4 md:px-6">
        <h1 className="text-blue-600 m-2 text-lg md:text-xl">Add New Task</h1>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div>
          <h4 className="m-2 text-sm md:text-base">Name of the task</h4>
          <input
            type="text"
            className="border rounded border-gray-300 focus:outline-none w-full m-2 p-2 text-sm md:text-base"
            placeholder="Text"
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <h4 className="my-3 text-sm md:text-base">Start Date</h4>
            <input
              className="w-full md:w-60 h-12 border border-gray-300 rounded-lg px-4 text-sm"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <h4 className="my-3 text-sm md:text-base">End Date</h4>
            <input
              className="w-full md:w-60 h-12 border border-gray-300 rounded-lg px-4 text-sm"
              type="date"
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

export default AddTodo;
