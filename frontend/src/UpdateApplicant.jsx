import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateApplicant(){
    const {id} = useParams()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [applying, setApplying] = useState()
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3002/getApplicant/'+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setAge(result.data.age)
            setEmail(result.data.email)
            setContact(result.data.contact)
            setApplying(result.data.applying)
        })
        .catch(err => console.log(err))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/updateApplicant/'+id,
            {name, age, email, contact, applying}
        )
        .then(result => {
            console.log(result)
            nav('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update applicant</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input 
                            type="number" 
                            placeholder="Enter Age" 
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Contact number</label>
                        <input 
                            type="text" 
                            placeholder="Enter number" 
                            className="form-control"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Applying for</label>
                        <input 
                            type="text" 
                            placeholder="Enter job" 
                            className="form-control"
                            value={applying}
                            onChange={(e) => setApplying(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}