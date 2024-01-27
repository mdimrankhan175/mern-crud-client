import axios from 'axios';

const URL='http://localhost:8001';

export const addUser= async (data)=>{
    try{
       return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('Error while calling add User Api', error)
    }
}

export const getUsers=async()=>{
    try{
       return await axios.get(`${URL}/all`)
    }catch(error){
        console.log('Error while calling add User Api', error)
    }
}

export const getUser=async(id)=>{
    try{
       return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getUser Api', error)
    }
}


export const editUser=async(id, user)=>{
    try{
        return await axios.put(`${URL}/${id}`,user); // we can write put instead of post also to understand
    }catch(error){
        console.log('Error while calling getUser api', error)
    }
}

export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteUser api', error)
    }
}