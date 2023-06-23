import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../payme/index.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Chk = () => {
  const navigate = useNavigate();
  const [editableRows, setEditableRows] = useState({});

  const handleEditClick = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      <Box sx={{
        background:"black",
        height:"100vh",
        width:"100%",
        position:"absolute",
        top:"0",
       }}>
        <Box
          sx={{
            width: "450px",
            height: "769px",
            borderRadius: "15px",
            border: "1px solid black",
            boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
          }}
        >
          <Box className="vit"
            sx={{
              width: "100%",
              height: "769px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "8px",
              color: "black",
              position: "relative",
            }}
          >
<button style={{
  position:'relative',
  border:'1px solid red',
  width:'260px',
  height:'50px',
  background:'transparent',
  left:'20px',
  top:"10px",
  borderRadius:'5px',
}}>
  <ArrowUpwardIcon sx={{
    position:'relative',
    // border:'1px solid red',
    right:'96px',
    color:"red" ,
    top:'5px',
    fontSize:'39px',
  }}/>

<div style={{
  position:'relative',
  // border:'1px solid red',
  width:'60px',
  left:'81px',
  fontSize:'22px',
  bottom:'29px',
  color:"red" ,
}}>
Chikim
</div>

</button>
    
        </Box>

        
        </Box>
       <div style={{
        position:'absolute',
        width:'450px',
        height:'677px',
        borderRadius:'12px',
        background:'transparent',
        top:'200px',
        overflow:'auto',
       }}>
        
{/* <Link to={"/viewSave/Tushim"} style={{ textDecoration: "none" }}> */}

{/* </Link> */}

<Typography
          sx={{
            position:'relative',
            width:'100px',
             left: "60px", 
             top: "17px", 
             color: "gray" }}
        >
          03/73/2023
        </Typography>
        <Box
          sx={{
            position:'absolute',
            width: "380px",
            height: "50px",
            border: "1px solid red ",
            backgorund: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius:'5px',
            padding: "5px",
            right:'27px',
            top:'50px',
          }}
        >
          <IconButton
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: "red" ,
            }}
          >
            <ArrowUpwardIcon/>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "red" ,
              }}
            >
              <span>Asadov Asad</span>
              <span style={{ fontSize: "10px", color: "red"  }}>23:41</span>
            </Typography>
          </IconButton>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "red",
            }}
          >
            <span>23 400 so`m </span>
            <span style={{ fontSize: "10px", color: "red" }}>
              9860******0654
            </span>
          </Typography>
        </Box>

        <Typography
          sx={{
            position:'relative',
            width:'100px',
            left: "60px", 
            top: "110px", 
            color: "gray", }}
        >
          03/73/2023
        </Typography>
        <Box
          sx={{
            position:'absolute',
            width: "380px",
            height: "50px",
            border: "1px solid  red",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius:'5px',
            padding: "5px",
            right:'27px',
            top:'160px',
          }}
        >
          <IconButton
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: "red",
            }}
          >
            <ArrowUpwardIcon/>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "red",
              }}
            >
              <span>Asadov Asad</span>
              <span style={{ fontSize: "10px", color: "red" }}>23:41</span>
            </Typography>
          </IconButton>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "red",
            }}
          >
            <span>23 400 so`m </span>
            <span style={{ fontSize: "10px", color: "red" }}>
              9860******0654
            </span>
          </Typography>
        </Box>

       </div>
      </Box>
      
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "relative",
          height:'49px',
          color: "black",
          zIndex: "98989898",
          bottom: "756px",
          left: "630px",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default Chk;

