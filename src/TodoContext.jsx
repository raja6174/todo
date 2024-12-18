import { createContext, useState } from "react";
const myContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditable,setIsEditable] = useState(false)
  return (
    <myContext.Provider
      value={{
        collections,
        setCollections,
        activeCollection,
        setActiveCollection,
        isModalOpen,
        setIsModalOpen,
        isEditable,
        setIsEditable
      }}
    >
      {children}
    </myContext.Provider>
  );
};
export default myContext;
