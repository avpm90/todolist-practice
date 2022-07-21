import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [form, setForm] = useState({
    task: "",
    taskQuantity: "",
  });

  console.log(detail);
  useEffect(() => {
    async function fetchId() {
      const response = await axios.get(`http://localhost:4001/user/${id}`);
      setDetail(response.data);
    }
    fetchId();
  }, [id]);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleTasks(e) {
    e.preventDefault();
    console.log(form);
    const response = await axios.post(
      `http://localhost:4001/task/create-task/${id}`,
      form
    );
    console.log(response);
  }

  return (
    <div>
      <p>{detail.name}</p>
      <p>{detail.age}</p>
      <Link to={`/edit/${id}`}> Editar</Link>

      <form>
        <label>Task</label>
        <input name="task" value={form.task} onChange={handleForm} />
        <label>Task Quantity</label>
        <input
          name="taskQuantity"
          value={form.taskQuantity}
          onChange={handleForm}
        />
        <button onClick={handleTasks}>Create Task</button>
      </form>
      {detail.tasks.map((currentElement) => {
        return (
          <div>
            <p>{currentElement.task}</p>
            <p>{currentElement.taskQuantity}</p>
          </div>
        );
      })}
    </div>
  );
}
