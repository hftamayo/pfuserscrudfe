import axios from "axios";
import React, { useState } from "react";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();  
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8004/createuser", { firstname, lastname, email, age })
      .then((res) => {
        dispatch(addUser(res.data));
        navigate('/view');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>          
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
