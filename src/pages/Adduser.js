import React, { useEffect, useState } from 'react'
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { studentAdded } from '../redux/action';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
}));
const Adduser = () => {
    const classes = useStyles();
    let history = useHistory();
    let dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state, [name]: value
        })
    }
    const { name, dob, gender, standard, bloodgroup, address, fathername, mothername, contact, emergencynumber } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(window.confirm('Your registration successfully completed.....')){
            dispatch(studentAdded(state));
            history.push('/thank')
        }
        
       // history.push('/Allstudents')
    }
   

    // const handleOpen = () => {
    //   setOpen(true);
    // };
 
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4 adduserform'>
                    <h1>Registration Form</h1>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField id="standard-basic" label="Name" name='name' value={name} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Date of Birth" name='dob' value={dob} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Gender" name='gender' value={gender} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Standard" name='standard' value={standard} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Bloodgroup" name='bloodgroup' value={bloodgroup} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Address" name='address' vlaue={address} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Father Name" name='fathername' value={fathername} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Mother Name" name='mothername' value={mothername} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Contact" name='contact' value={contact} onChange={handleChange} /><br />
                        <TextField id="standard-basic" label="Emergency Number" name='emergencynumber' value={emergencynumber} onChange={handleChange} /><br />
                        <button
                           className='btn btn-primary'
                            size="large"
                            style={{ margin: '5px' }}
                            startIcon={<SaveIcon />}
                        >Save</button>
                    </form>
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                </div>
            </div>

            {/* <form className='adduserform' onSubmit={handleSubmit}>
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
            </form> */}
             
        </div>
    )
}

export default Adduser
