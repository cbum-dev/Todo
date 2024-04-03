import { useState } from "react";
import { addTodo } from "../store/Slicer/todoSlice";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  // Dispatch function for Redux actions
  const dispatch = useDispatch();

  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  // State to hold the error message
  const [error, setError] = useState("");

  // Function to handle key down events
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue !== "") {
        // Dispatch addTodo action if input is not empty
        dispatch(
          addTodo({
            id: Date.now(),
            task: trimmedValue,
            isDone: false,
          })
        );
        // Clear input value and error
        setInputValue("");
        setError("");
      } else {
        // Set error if input is empty
        setError("Task cannot be empty");
      }
    }
  };

  return (
    <div>
      {/* Input field for adding a new todo */}
      <input
        id="outlined-basic"
        className="px-4 w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
        placeholder="Enter a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* Error message display */}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default TaskInput;
