import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Applicant(){
    const [applicant, setApplicant] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/')
        .then(result => setApplicant(result.data))
        .catch(err => console.log(err))
    }, [])
    
    return(
<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/create-applicant' className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Applying for</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicant.map((app) => {
                            return <tr>
                            <td>{app.name}</td>
                            <td>{app.age}</td>
                            <td>{app.email}</td>
                            <td>{app.contact}</td>
                            <td>{app.applying}</td>
                            <td>
                                <Link 
                                    to={`/update-applicant/${app._id}`}
                                    className='btn btn-success'>Edit</Link>
                                <button
                                    className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}