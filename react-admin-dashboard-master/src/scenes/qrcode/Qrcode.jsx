import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import '../payme/index.css'
const Qrcode = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="vit"
          sx={{
            width: "450px",
            height: "769px",
            marginTop: "40px",
            borderRadius: "15px",
            border: "1px solid white",
            padding: "20px",
            boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "230px",
              background: "white",
              borderRadius: "10px",
            }}
          ></Box>
        </Box>
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "relative",
          color: 'white',
          zIndex: "98989898",
          bottom: "740px",
          left: "610px",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default Qrcode;
