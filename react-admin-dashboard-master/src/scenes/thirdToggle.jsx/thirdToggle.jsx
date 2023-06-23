import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Avatar from "../../assets/pngwing.com.png";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const ThirdToogle = () => {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: "999",
          top: "64px",
          right: "0",
          width: "350px",
          height: "1039px",
          background: "transparent",
          boxShadow: '18px 18px 19px #2DFB2B',
          color: "white",
          backdropFilter: "blur(30px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginTop: "30px" }}>
          <img
            src={Avatar}
            width="200px"
            style={{ marginLeft: "35px", marginBottom: "50px" }}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Name of the <br /> educational center: </Typography>
            <input
              type="text"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #1db57d",
                height:"30px"
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Name of the <br /> educational img: </Typography>
            <input type="file"
              style={{
                position:"relative",
                background: "#1db57d",
                color: "#1db57d",
                border: "1px solid #1db57d",
                height:"30px",
                width:'161px',
              }}
              />
          </Box>
          <Button
            color="secondary"
            sx={{ width: "100%", marginTop: "28px" }}
            variant="contained"
          >
            Tasdiqlash
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ThirdToogle;
