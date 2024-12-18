import React, { useContext } from "react";
import myContext from "../../TodoContext";

const TodoCard = ({ todo, theme, textcolor }) => {
  const { isEditable, setIsEditable } = useContext(myContext);
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out mb-3"
      onClick={() => {
        setIsEditable(!isEditable);
      }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{todo.name}</h3>
      <div className="flex justify-between items-center text-sm w-full gap-6">
        <div className="text-center">
          <h4 className="text-gray-600 font-semibold mb-2">Start Date</h4>
          <span className={`${theme} ${textcolor} py-1 px-3 rounded-md`}>
            {todo.start}
          </span>
        </div>
        <div className="text-center">
          <h4 className="text-gray-600 font-semibold mb-2">Deadline</h4>
          <span className={`${theme} ${textcolor} py-1 px-3 rounded-md`}>
            {todo.end}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
