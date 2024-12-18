import React, { useContext } from "react";
import myContext from "../TodoContext";

const Collections = () => {
  const { collections, activeCollection, setActiveCollection } =
    useContext(myContext);

  return (
    <div>
      <ul>
        {collections.map((collection) => (
          <li
            key={collection.id}
            onClick={() => {
              setActiveCollection(collection);
            }}
            className={`my-3 p-2 cursor-pointer flex justify-between items-center rounded ${
              collection.id === activeCollection.id
                ? "bg-blue-100 hover:bg-blue-300"
                : "hover:bg-gray-200"
            }`}
          >
            <p className="font-medium">{collection.name}</p>
            <p className="">{collection.todos.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
