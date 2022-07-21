import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Create() {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUsers(e) {
    e.preventDefault();
    console.log(form);
    const response = await axios.post(
      "http://localhost:4001/user/create",
      form
    );
    console.log(response);
  }

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <label>Name</label>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleForm}
        />
        <label>Age</label>
        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleForm}
        />

        <button onClick={handleUsers}>Add</button>
      </form>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
