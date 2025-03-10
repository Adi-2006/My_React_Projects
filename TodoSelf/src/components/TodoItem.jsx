import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete, updateTodo, getElapsedTime } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    // if check krta hia ki khi new text khali to nhi hai na 
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between  dark:bg-gray-700 dark:text-white bg-gray-100 p-3 rounded-lg shadow-sm transition hover:shadow-md">
      {/* Agar edit mode on hoga tb ye work krega nhi tonhi krega  */}
      {isEditing ? (
        <div className="flex flex-1">
          <input
            type="text"
            className="w-full px-2 py-1 border rounded-md outline-none"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate} className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md">
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-2 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="h-5 w-5 text-blue-500"
            />
            <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}>
              {todo.text}
            </span>
            <small className="text-gray-400">{getElapsedTime(todo.timestamp)}</small>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-700">
              ✏️
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
