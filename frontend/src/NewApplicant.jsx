import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function NewApplicant(){
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [applying, setApplying] = useState()
    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createApplicant',{
            name, age, email, contact, applying
        })
        .then(result => {
            console.log(result)
            nav('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add applicant</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input 
                            type="number" 
                            placeholder="Enter Age" 
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Contact number</label>
                        <input 
                            type="text" 
                            placeholder="Enter number" 
                            className="form-control"
                            onChange={(e) => setContact(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Applying for</label>
                        <input 
                            type="text" 
                            placeholder="Enter job" 
                            className="form-control"
                            onChange={(e) => setApplying(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}