import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Applicant(){
    const [applicant, setApplicant] = useState([{
        name: 'Jemson Mislani',
        email: 'jem@gmail.com',
        contact: '09213456789',
        applying: 'Software Developer'
    }])
    return(
<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <button className="btn btn-success">Add +</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
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
                            <td>{app.email}</td>
                            <td>{app.contact}</td>
                            <td>{app.applying}</td>
                            <td>
                                <button 
                                    className='btn btn-success'>Edit</button>
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