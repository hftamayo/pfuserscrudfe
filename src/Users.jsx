import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';

function Users() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get('http://localhost:8004');
                dispatch();
            } catch(error){
                console.log(error)
            }
            
        }
        fetchData();
    }, [])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <button className='btn btn-success btn-sm'>
                Add +
            </button>
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

                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Users;