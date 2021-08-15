import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { loadStudents, studentDeleted } from '../redux/action';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.css';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Allstudents=()=> {
    const classes = useStyles();
    let history=useHistory();
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadStudents());
    },[]);
    const {users}=useSelector(state=>state.data)
    const handleDelete=(id)=>{
      if(window.confirm('Are you sure you want to delete.....')){
        dispatch(studentDeleted(id));
      }

    }
    return (
        <div className='tablestyles'>
          <div style={{margin:'20px'}}>
          <button onClick={()=>history.push('/adduser')}>ADD USER</button>
          </div>
         
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{background:'gray',fontWeight:'bold'}}>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">DOB</TableCell>
            <TableCell align="center">GENDER</TableCell>
            <TableCell align="center">standard</TableCell>
            <TableCell align="center">bloodgroup</TableCell>
            <TableCell align="center">address</TableCell>
            <TableCell align="center">fathername</TableCell>
            <TableCell align="center">mothername</TableCell>
            <TableCell align="center">contact</TableCell>
            <TableCell align="center">emergencynumber</TableCell>
            <TableCell align="center">ACTION</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((row) => (
            <TableRow key={row.id}>
            
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.standard}</TableCell>
              <TableCell align="center">{row.bloodgroup}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.fathername}</TableCell>
              <TableCell align="center">{row.mothername}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.emergencynumber}</TableCell>
              <TableCell align="center"><button onClick={()=>handleDelete(row.id)}>DELETE</button></TableCell>
              <TableCell align="center"><button onClick={()=>history.push('/edituser/'+row.id)}>EDIT</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Allstudents
