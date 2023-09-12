import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8004");
        dispatch(getUser(response.data));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
