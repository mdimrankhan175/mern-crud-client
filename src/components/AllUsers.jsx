import { useEffect, useState } from 'react';
import{Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';
import {getUsers, deleteUser} from '../service/api';
import {Link} from 'react-router-dom';

const StyledTable=styled(Table)`
width:80%;
margin: 50px auto 0 auto;
border:solid 2px brown;
`

const THead=styled(TableRow)`
background: #000000;
&>th{
    color:#fff;
    font-size:20px;
}
`
const TBody=styled(TableRow)`
& > td{
    font-size: 18px;
}
`

const AllUsers=()=>{

    const [users, setUsers]=useState([])

    useEffect(()=>{
        getAllUsers();
    }, []);

    const getAllUsers = async ()=>{
       let response=await getUsers();
       setUsers(response.data)
       console.log(response);
    }

    const deleteUserDetails = async (id)=>{
        await deleteUser(id);
        getAllUsers();
    }


    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>(
                       <TBody key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        </TableCell>
                        <TableCell>                                    
                            <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(user._id)} >Delete</Button>
                        </TableCell>
                        </TBody> 
                    ))
                }
            </TableBody>
        </StyledTable>
    )
} 

export default AllUsers