import React from 'react'
import { useState } from 'react';
import { TextField, Button } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import {Link} from "react-router-dom"

import axios from "axios"


const Body2 = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        gender:"",
        age:"",
        profession:""
    })
    const [data,setData]=useState([])
    const handleChange=(event)=>{
        const {name,value}=event.target
        setFormData({...formData,[name]:value})
    }
    console.log(formData);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    
        axios.post("https://httpbin.org/anything",{
            name:formData.name,
            email:formData.email,
            gender:formData.gender,
            age:formData.age,
            profession:formData.profession
        }).then((response)=>{
            console.log(response.data.data);
            const jsonObject=JSON.parse(response.data.data)
            setData((prevData) => [...prevData, jsonObject]);

        }).catch((err)=>{
            console.log(err);
        })
   
  };
  const handleDelete = (index) => {
    
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };
  return (
    <form onSubmit={handleSubmit}>
        <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"/>
         <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"/>
         <TextField
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        fullWidth
        margin="normal"/>
         <TextField
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        fullWidth
        margin="normal"/>
         <TextField
        label="Profession"
        name="profession"
        value={formData.profession}
        onChange={handleChange}
        fullWidth
        margin="normal"/>
        
        <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Profession</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.map((item,index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.profession}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(index)} color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            
      </TableBody>
      
    </Table>
    <Link to="/">
    <Button color='primary' >
        Previous page
      </Button>

    </Link>
    
    
    
    
   
  </TableContainer>




    </form>
   
  )
}

export default Body2
