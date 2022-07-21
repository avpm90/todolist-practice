import { Routes, Route } from "react-router-dom";
//import { Home } from "./Pages/Home";
//import { Create } from "./Pages/Create";
//import { Detail } from "./Pages/Detail";
//import { Update } from "./Pages/Update";
//import { Tasks } from "./Pages/Tasks";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign" element={<SignUp />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/tasks" element={<Tasks />} /> */}
      </Routes>
    </div>
  );
}

export default App;
