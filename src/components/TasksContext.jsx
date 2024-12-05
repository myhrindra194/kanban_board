/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ListTaskContext = createContext();

export const ListTaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(
    window.localStorage.getItem("myList")
      ? JSON.parse(window.localStorage.getItem("myList"))
      : []
  );
  const [idUnique, setIdUnique] = useState(
    window.localStorage.getItem("idUnique")
      ? parseInt(localStorage.getItem("idUnique"))
      : 0
  );

  useEffect(() => {
    const tasks = JSON.parse(window.localStorage.getItem("myList"));
    if (tasks) setTaskList(tasks);
  }, [setTaskList]);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("idUnique", JSON.stringify(idUnique));
  }, [idUnique]);

  return (
    <ListTaskContext.Provider
      value={{
        taskList,
        setTaskList,
        idUnique,
        setIdUnique,
      }}
    >
      {children}
    </ListTaskContext.Provider>
  );
};
