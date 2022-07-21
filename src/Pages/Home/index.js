/* import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [users, setUsers] = useState([
    {
      name: "",
      age: "",
    },
  ]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get("http://localhost:4001/user/all");
        console.log(response);
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [setUsers]);
  console.log(users);
  return (
    <div>
      <h1>Home</h1>
      {users.map((currentUser) => {
        return (
          <div>
            <p>{currentUser.name}</p>
            <p>{currentUser.age}</p>
            <Link to={`/detail/${currentUser._id}`}>
              <button>Go to details</button>
            </Link>
          </div>
        );
      })}
      <Link to="/create">
        <button>Go to Create</button>
      </Link>
    </div>
  );
}
 */