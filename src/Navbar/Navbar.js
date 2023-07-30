import React from 'react'
import {AppBar,Toolbar,Typography,Button} from "@mui/material"

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{flexGrow:1}}>
          Data Manager
       </Typography>
       
       



      </Toolbar>


    </AppBar>
  )
}

export default Navbar
