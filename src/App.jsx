import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
