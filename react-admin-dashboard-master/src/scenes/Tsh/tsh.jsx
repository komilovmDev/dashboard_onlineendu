import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../payme/index.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Tsh = () => {
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
            position:'absolute',
            width: "380px",
            height: "50px",
            border: "1px solid #164D9F",
            borderRadius:'5px',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              color: "#164D9F",
            }}
          >
            <ArrowDownwardIcon />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#164D9F",
              }}
            >
              <span>Asadov Asad</span>
              <span style={{ fontSize: "10px", color: "#164D9F" }}>23:41</span>
            </Typography>
          </IconButton>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#164D9F",
            }}
          >
            <span>23 400 so`m </span>
            <span style={{ fontSize: "10px", color: "#164D9F" }}>
              9860******0654
            </span>
          </Typography>
        </Box>

       
        <Box
          sx={{
            position:'absolute',
            width: "380px",
            height: "50px",
            border: "1px solid#164D9F",
            borderRadius:'5px',
            backgorund: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              color: "#164D9F",
            }}
          >
            <ArrowDownwardIcon />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#164D9F",
              }}
            >
              <span>Asadov Asad</span>
              <span style={{ fontSize: "10px", color: "#164D9F" }}>23:41</span>
            </Typography>
          </IconButton>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#164D9F",
            }}
          >
            <span>23 400 so`m </span>
            <span style={{ fontSize: "10px", color: "#164D9F" }}>
              9860******0654
            </span>
          </Typography>
        </Box>

        </Box>
    </>
  );
};

export default Tsh;
