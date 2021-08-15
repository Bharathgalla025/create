import React, { useEffect, useState } from 'react'
import './styles.css';
import { useDispatch,useSelector } from "react-redux";
import { studentAdded } from '../redux/action';
import { useHistory } from 'react-router-dom';
const Adduser=()=> {
    let history=useHistory();
    let dispatch=useDispatch();
    const [state,setState]=useState({
        name:'',
        dob:'',
        gender:'',
        standard:'',
        bloodgroup:'',
        address:'',
        fathername:'',
        mothername:'',
        contact:'',
        emergencynumber:''
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setState({
            ...state,[name]:value
        })
    }
        const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(studentAdded(state));
        history.push('/Allstudents')
    }

    const {name,dob,gender,standard,bloodgroup,address,fathername,mothername,contact,emergencynumber}=state;
    return (
        <div >
            <form className='adduserform' onSubmit={handleSubmit}>
                <label>Name :</label><br/><input type='text' name='name'value={name} onChange={handleChange}/><br/>
                <label>Date of Birth :</label><br/><input type='text' name='dob' value={dob} onChange={handleChange}/><br/>
                <label>Gender :</label><br/><input type='text' name='gender' value={gender} onChange={handleChange}/><br/>
                <label>Standard :</label><br/><input type='text' name='standard' value={standard} onChange={handleChange}/><br/>
                <label>Bloodgroup :</label><br/><input type='text' name='bloodgroup' value={bloodgroup} onChange={handleChange}/><br/>
                <label>Address :</label><br/><input type='text' name='address' vlaue={address} onChange={handleChange}/><br/>
                <label>Father Name :</label><br/><input type='text' name='fathername' value={fathername} onChange={handleChange}/><br/>
                <label>Mother Name :</label><br/><input type='text' name='mothername' value={mothername} onChange={handleChange}/><br/>
                <label>Contact :</label><br/><input type='text' name='contact' value={contact} onChange={handleChange}/><br/>
                <label>Emergency Number :</label><br/><input type='text' name='emergencynumber' value={emergencynumber} onChange={handleChange}/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Adduser
