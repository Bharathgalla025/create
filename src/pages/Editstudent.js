import React, { useEffect, useState } from 'react'
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { studentAdded, studentEdit, studentUpdate } from '../redux/action';
import { useHistory, useParams } from 'react-router-dom';
import { EDIT_STUDENT } from '../redux/actiontype';
const Editstudent = () => {
    let history = useHistory();
    let { id } = useParams();
    console.log('..,..................',id)
    let dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        dob: '',
        gender: '',
        standard: '',
        bloodgroup: '',
        address: '',
        fathername: '',
        mothername: '',
        contact: '',
        emergencynumber: ''
    });
    const { user } = useSelector(state => state.data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state, [name]: value
        })
    }
    useEffect(() => {
        dispatch(studentEdit(id))
    }, [])
    useEffect(() => {
        if (user) {
            setState({
                ...user
            })
        }
    }, [user])
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(studentUpdate(state,id));
        history.push('/Allstudents')
    }

    const { name, dob, gender, standard, bloodgroup, address, fathername, mothername, contact, emergencynumber } = state;
    return (
        <div >
            <form className='adduserform' onSubmit={handleSubmit}>
                <label>Name :</label><br /><input type='text' name='name' value={name} onChange={handleChange} /><br />
                <label>Date of Birth :</label><br /><input type='text' name='dob' value={dob} onChange={handleChange} /><br />
                <label>Gender :</label><br /><input type='text' name='gender' value={gender} onChange={handleChange} /><br />
                <label>Standard :</label><br /><input type='text' name='standard' value={standard} onChange={handleChange} /><br />
                <label>Bloodgroup :</label><br /><input type='text' name='bloodgroup' value={bloodgroup} onChange={handleChange} /><br />
                <label>Address :</label><br /><input type='text' name='address' vlaue={address} onChange={handleChange} /><br />
                <label>Father Name :</label><br /><input type='text' name='fathername' value={fathername} onChange={handleChange} /><br />
                <label>Mother Name :</label><br /><input type='text' name='mothername' value={mothername} onChange={handleChange} /><br />
                <label>Contact :</label><br /><input type='text' name='contact' value={contact} onChange={handleChange} /><br />
                <label>Emergency Number :</label><br /><input type='text' name='emergencynumber' value={emergencynumber} onChange={handleChange} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Editstudent;
