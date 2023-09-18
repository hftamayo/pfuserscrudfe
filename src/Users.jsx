import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Users() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-5">
        <Link to="/create" className="btn btn-success btn-sm">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>FullName</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <tr>
                <td>{user.firstname + " " + user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-sm btn-success me-2">Update</Link>
                  <Link to={`/delete/${user.id}`} className="btn btn-sm btn-danger">Delete</Link>
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
