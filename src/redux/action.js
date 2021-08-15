import axios from 'axios';
import * as types from './actiontype';

const getStudents=(students)=>({
    type:types.GET_STUDENTS,
    payload:students
})

const addStudent=()=>({
    type:types.ADD_STUDENT
})

const deleteStudent=()=>({
    type:types.DELETE_STUDENT
})

const editStudent=(user)=>({
    type:types.EDIT_STUDENT,
    payload:user
})


const updateStudent=()=>({
    type:types.UPDATE_STUDENT
})



export const loadStudents=()=>{
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            dispatch(getStudents(res.data));
        }).catch((error)=>console.log(error))
    }
}

export const studentAdded=(user)=>{
    return function(dispatch){
        axios.post('http://localhost:5000/user/',user).then((res)=>{
            dispatch(addStudent(res.data));
            dispatch(loadStudents());
        }).catch((error)=>console.log(error))
    }
}

export const studentDeleted=(id)=>{
    return function(dispatch){
        axios.delete('http://localhost:5000/user/'+id).then((res)=>{
            dispatch(deleteStudent(res.data));
            dispatch(loadStudents());
        }).catch((error)=>console.log(error))
    }
}

export const studentEdit=(id)=>{
    return function(dispatch){
        axios.get('http://localhost:5000/user/'+id).then((res)=>{
            dispatch(editStudent(res.data));
        }).catch((error)=>console.log(error))
    }
}

export const studentUpdate=(user,id)=>{
    return function(dispatch){
        axios.put('http://localhost:5000/user/'+id,user).then((res)=>{
            dispatch(updateStudent(res.data));
            dispatch(loadStudents());
        }).catch((error)=>console.log(error))
    }
}