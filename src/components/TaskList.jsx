import { useDispatch, useSelector } from "react-redux";

export default function TaskList() {
  // Selecting todoList from Redux store
  const todoList = useSelector((state) => state.todo.todos);

  // Getting dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle task deletion
  const handleDelete = (id) => {
    dispatch({ type: "todo/removeTodo", payload: id });
  };

  // Function to handle task completion
  const handleDone = (id) => {
    dispatch({ type: "todo/doneTodo", payload: id });
  };

  return (
    <div className="m-2">
      {/* List of todos */}
      <ul className="w-full">
        {/* Display message if no todos */}
        {todoList.length === 0 && (
          <li className="text-lg text-white font-medium">
            No todos found. Add a new todo to get started!
          </li>
        )}
        {/* Display each todo */}
        {todoList.map((item) => (
          <li
            key={item.id}
            className="flex bg-zinc-800 my-2 items-center rounded-lg group p-2 duration-500"
          >
            {/* Todo item text */}
            <div
              className={`w-full text-white duration-500 ${
                item.isDone ? "line-through" : ""
              }`}
            >
              {item.task}
            </div>
            {/* Todo item actions */}
            <div className="flex items-center">
              {/* Checkbox to mark todo as done */}
              <input
                type="checkbox"
                defaultChecked={item.isDone}
                onClick={() => handleDone(item.id)}
                className="form-checkbox rounded-md text-gray-600 h-5 w-5 mr-2"
              />
              {/* Button to delete todo */}
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 rounded-md bg-red-700 text-white hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
