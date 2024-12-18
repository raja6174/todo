import React, { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import myContext from "../TodoContext";
import TodoCard from "./Todo/TodoCard";

const Sections = ({ name, theme, textColor }) => {
  const {
    activeCollection,
    isModalOpen,
    setIsModalOpen,
  } = useContext(myContext);

  const handleNewTask = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredTodos = activeCollection.todos.filter(
    (todo) => todo.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="border-r-2 px-4 py-6 space-y-6 sm:space-y-4 text-sm max-lg:text-xs">
     
      <div className="flex items-center justify-between ">
        <span
          className={`${theme} py-2 px-4 rounded-2xl ${textColor} flex items-center gap-2`}
        >
          <FaCircle className="text-[8px]" />
          <h4 className="font-medium text-sm md:text-base">{name}</h4>
        </span>
      </div>

      
      <button
        onClick={handleNewTask}
        className={`${theme} ${textColor} px-4 py-2 rounded-xl w-full flex items-center justify-center text-sm font-medium hover:opacity-90`}
      >
        + Add New Task
      </button>

      
      <div className="space-y-4">
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            theme={theme}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
