import { useState, useEffect } from 'react';

import { FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, getUser } from '../service/api';


const Container=styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;
& > div{
    margin-top: 20px;
}

`


const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser=()=>{

    const [user, setUser]=useState(defaultValue);
    
    const {id}=useParams();

    let navigate=useNavigate();
    

    useEffect(()=>{
        loadUserDetails();
    },[])

const loadUserDetails= async ()=>{
    const response= await getUser(id);
    setUser(response.data);
}

const editUserDetails = async() => {
    const response = await editUser(id, user);
    navigate('/all');
}

    const onValueChange=(e)=>{
        console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }

    
    return(
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}  />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel> 
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}  />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}  />
            </FormControl>

            <FormControl>
            <Button variant="contained" onClick={()=>editUserDetails()}>EDIT USER</Button>
            </FormControl>
           
        </Container>
    )
}

export default EditUser