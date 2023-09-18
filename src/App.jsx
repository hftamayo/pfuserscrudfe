import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import { getUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8004/getusers");
        dispatch(getUser(response.data));
        //console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/view" element={<Users />}></Route>
      <Route path="/create" element={<CreateUser />}></Route>
      <Route path="/edit/:id" element={<UpdateUser />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
