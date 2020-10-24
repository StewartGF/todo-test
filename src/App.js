import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(todos);
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), task: task, completed: false },
    });
  };
  return (
    <div className="App p-24">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 border-red-200 p-2"
          value={task}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="border-2 py-2 px-2 ml-4 rounded border-green-200 bg-green-100"
          onClick={handleSubmit}
          type="submit"
          value="Submit"
        >
          Agregar
        </button>
      </form>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            style={
              todo.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "" }
            }
            onClick={(e) =>
              dispatch({ type: "COMPLETE_TODO", action: { id: todo.id } })
            }
          >
            {todo.task}
          </div>
        );
      })}
    </div>
  );
}

export default App;
