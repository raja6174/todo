import React, { useContext, useState } from "react";
import myContext from "../TodoContext";
import AddTodo from "./Todo/AddTodo";
import EditTodo from "./Todo/EditTodo"
import Sections from "./Sections";

const TodoPage = () => {
  const { activeCollection, collections, setCollections, setActiveCollection } =
    useContext(myContext);

  return (
    <div className="w-5/6 p-6 max-md:w-2/3">
      {activeCollection ? (
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold ">
            {activeCollection.name}
          </h2>
          <hr className="border-t-2 border-gray-200 my-4 w-full" />
          <AddTodo />
          <EditTodo />
          <div className="flex justify-between gap-x-4 mt-6 w-full max-md:flex-col">
            <Sections name="To Do" theme="bg-blue-200" textColor="text-blue-700"  />
            <Sections name="In Progress" theme="bg-pink-100" textColor="text-pink-400" />
            <Sections name="In Review" theme="bg-blue-100" textColor="text-blue-300" />
            <Sections name="Completed" theme="bg-green-100" textColor="text-green-400" />
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          Please select a collection to view todos.
        </p>
      )}
    </div>
  );
};

export default TodoPage;
