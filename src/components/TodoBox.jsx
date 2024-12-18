import React, { useContext, useState } from "react";
import myContext from "../TodoContext";
import { v4 as uuidv4 } from "uuid";

const TodoBox = () => {
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startDate, setStartDate] = useState("")
  const { collections, setCollections, activeCollection, setActiveCollection } =
    useContext(myContext);

  const addTodo = () => {
    if (todo && dueDate && activeCollection) {
      const updatedCollections = collections.map((col) => {
        if (col.id === activeCollection.id) {
          return {
            ...col,
            todos: [...col.todos, { id: uuidv4(), name: todo, start : startDate, end: dueDate }],
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
    } else {
      alert("Please fill out all fields and select a collection!");
    }
  };

  return (
    <div className="flex space-x-2 mb-4 w-5/6 ">
      <input
        className="flex-1 p-2 border border-gray-300 outline-none rounded"
        type="text"
        placeholder="Enter the todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        className="p-2 border border-gray-300 rounded"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        className="p-2 border border-gray-300 rounded"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 shadow-lg"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoBox;
