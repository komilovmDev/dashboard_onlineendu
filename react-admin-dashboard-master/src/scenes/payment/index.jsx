import { Box, Button, Typography, Link as A } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../payme/index.css"
const Payment = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box className="vit"
        sx={{
          width: "450px",
          height: "700px",
          marginTop: "50px",
          borderRadius: "15px",
          border: "1px solid #274463",
          padding: "20px",
          boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
          gap: "0",
        }}
      >
        <Box sx={{ textAlign: "center", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "30px",
              borderRadius: "10px",
              gap: "70px",
              padding: "60px 0",
            }}
          >
            <input className="vit"
              type="text"
              placeholder="Enter your surname"
              style={{
                width: "300px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                height: "60px",
                color: "white",
                border: "1px solid #274463",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
            <input className="vit"
              type="text"
              placeholder="Enter your name"
              style={{
                width: "300px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                height: "60px",
                color: "white",
                border: "1px solid #274463",
                padding: "5px",
                borderRadius: "10px",
                margin: "10px",
              }}
            />
            <input className="vit"
              placeholder="telefon raqamingizni kiriting"
              type="text"
              style={{
                width: "300px",
                height: "60px",
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid #274463",
                borderRadius: "10px",
                padding: "3px 10px",
                margin: "10px",
              }}
            />
          </Box>
        </Box>
        {/* <Box sx={{ textAlign: "center", marginTop: "40px" }}></Box>
        <Box sx={{ textAlign: "center", marginTop: "40px" }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "20px", background: "transparent" }}
          >
            Agar siz plastik kartichka bilan to`lov qila olmasangiz, siz uchun
            plastik kartichka orqali to`lov qiladigan insonni telefon raqamini
            kiriting !
          </Typography>
          <input
            placeholder="phone number"
            type="text"
            style={{
              width: "300px",
              backgroundColor: "#fff",
              height: "60px",
              border: "none",
              borderRadius: "10px",
              padding: "3px 10px",
            }}
          />
        </Box> */}
        <Link to={"/Payment/Vid"} style={{ textDecoration: "none" }}>
          <Button className="vit"
            variant="contained"
            sx={{
              border: "1px solid  #274463",
              width: "300px",
              marginTop: "40px",
              marginLeft: "55px",
              height: "40px",
            }}
          ><div style={{
            color: " #274463"
          }}>
              TASDIQLASH
            </div>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Payment;
