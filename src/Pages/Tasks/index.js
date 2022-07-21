import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Tasks() {
  const [tasks, setTasks] = useState({
    task: "",
    taskQuantity: "",
  });

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get("http://localhost:4001/task/tasks");
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((currentTask) => {
        return (
          <div>
            <p>{currentTask.task}</p>
            <p>{currentTask.taskQuantity}</p>
          </div>
        );
      })}
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
