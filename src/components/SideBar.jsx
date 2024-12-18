import React, { useContext, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Collections from "./Collections";
import myContext from "../TodoContext";
import { v4 as uuidv4 } from "uuid";
import { FaTasks } from "react-icons/fa";

const SideBar = () => {
  const [showInput, setShowInput] = useState(false);
  const { collections, setCollections } = useContext(myContext);
  const [collectionName, setCollectionName] = useState("");

  const AddCollections = () => {
    const updatedcollections = [
      ...collections,
      { id: uuidv4(), name: collectionName, todos: [] },
    ];
    setCollections(updatedcollections);
    setShowInput(false);
    setCollectionName("");
  };
  return (
    <div className=" bg-gray-50 shadow-lg p-4 w-1/6 max-md:w-1/3">
      <div className="flex mb-6">
        <FaTasks className="text-xl text-blue-500" />
        <h2 className="font-bold ml-3">Task boards</h2>
        
      </div>
      <hr className="border-t-2 border-gray-200 my-4 w-full" />
      <button
        className="text-blue-500 flex items-center gap-1"
        onClick={() => {
          setShowInput((prev) => !prev);
        }}
      >
        <h2 className="text-base font-medium">+ Add new projects</h2>
      </button>
      {showInput ? (
        <div className="mt-3  ">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            placeholder="enter collection name...."
            value={collectionName}
            onChange={(e) => {
              setCollectionName(e.target.value);
            }}
          />
          <button
            className="bg-blue-400 p-2 text-white rounded w-full"
            onClick={AddCollections}
          >
            Add
          </button>
        </div>
      ) : (
        <></>
      )}
      <h2 className="p-1 text-gray-600 font-semibold text-xl mt-4">
        My Collections
      </h2>
      <Collections />
    </div>
  );
};

export default SideBar;
