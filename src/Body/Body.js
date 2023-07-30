import React from 'react'
import { useEffect,useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from "@mui/material";
import {Link} from "react-router-dom"
import axios from "axios"


const Body = () => {
    const[data,setData]=useState([])


    useEffect(()=>{
         axios.get("https://reqres.in/api/users")
        .then((response)=>{
            setData(response.data.data)

        }).catch((error)=>{
            console.error("error fetching data",error);

        })

    },[])
    console.log(data);

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.first_name}</TableCell>
            <TableCell>{item.last_name}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Link to ="/next">
    <Button color="primary">Next page</Button>
    </Link>
   
  </TableContainer>
  
  
  
    
  )
}

export default Body
