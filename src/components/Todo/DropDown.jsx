import React, { useContext, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing the icon
import myContext from '../../TodoContext';

const DropDown = ({handleDropDown}) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("todo")

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleDropDownClick = (option) => {
    setSelectedOption(option)
    handleDropDown(option)
    setIsOpen(!isOpen)

  }

  return (
    <div className="relative w-full inline-block text-left">
      
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between border border-gray-300 w-full px-4 py-2 text-sm font-medium text-gray-400 rounded-md focus:outline-none"
      >
        {selectedOption}
        <FaChevronDown className="ml-2 -mr-1 w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" >
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => {handleDropDownClick("to do")}}
            >
              to do
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => {handleDropDownClick("in progress")}}
            >
              in progress
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => {handleDropDownClick("in review")}}
            >
                in review
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => {handleDropDownClick("completed")}}
            >
                completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
