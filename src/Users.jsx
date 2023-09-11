import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/userSlice";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(useSelector((state) => state.users.users));

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
    <div className="d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-5">
        <button className="btn btn-success btn-sm">Add +</button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button className="btn btn-sm btn-success">Update</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
