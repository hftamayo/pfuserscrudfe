import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/create" element={<CreateUser />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
