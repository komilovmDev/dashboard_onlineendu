
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Typography, Link as A, InputLabel, FormControl, FilledInput, InputAdornment, IconButton, Input } from '@mui/material'
import { useState } from 'react'


import { Link } from "react-router-dom"
const index = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box className="vit"
        sx={{
          width: "450px",
          height: "700px",
          mt:"50px",
          borderRadius: "15px",
          border: "1px solid #274463",
          padding: "20px",
          boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
          gap: "0",
        }}
      >

      
      <div style={{
        fontSize: '23px',
        position:'relative',
        top:"180px",
        textAlign:"center"
      }}>
        Humoya paroli
      </div>
      <div style={{
        display: 'flex',
      }}>
        


        <Box sx={{height:"auto",display:"flex",position:"relative", top:"250px", alignItems:"center", justifyContent:"center",width:"100%"}}>
            <input type="password" style={{
              background: '#214f80',
              border: '1px solid #214f80',
              borderRadius: "6px",
              width: '100%',
              color: "white",
              height:"35px",
              position:"relative"
            }} />
      <Link to={"/Vada/Payme"}>
        <Button className="vit Link__btn"
          variant="contained"
          ><div style={{
            color: " #274463"
          }}>
            TASDIQLASH
          </div>
        </Button>
      </Link>
          </Box>
        {/* <Link to={"/Vada/Payme"} style={{ textDecoration: "none" }}>
          <Button className="vit"
            variant="contained"
            sx={{
              border: "1px solid  #274463",
              width: "100px",
              height: "50px",
            }}
          ><div style={{
            color: " #274463"
          }}>
              TASDIQLASH
            </div>
          </Button>
        </Link> */}
        </div>
    </Box>
    </Box>
  )
}

export default index