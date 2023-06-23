import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../payme/index"
const Editcard = () => {
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
            marginTop: "50px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "20px",
            boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "220px",
              margin: "auto",
              marginTop: "199px",
              position: "relative",
            }}
          >
            <img
              src="https://phonoteka.org/uploads/posts/2021-07/1625501267_7-phonoteka-org-p-karta-rossii-na-rabochii-stol-krasivo-oboi-8.jpg"
              width="100%"
              height={220}
              alt=""
            />
            <input
              placeholder="karta nomi"
              style={{
                position: "absolute",
                background: '#274463',
                top: "20px",
                left: "10px",
                width: "70px",
                outline: "none",
                borderRadius: "10px",
                padding: "5px",
                border: "none",
              }}
            />
            <input
              placeholder="karta raqami"
              style={{
                position: "absolute",
                background: '#274463',
                height: "25px",
                top: "180px",
                left: "10px",
                width: "150px",
                outline: "none",
                borderRadius: "10px",
                padding: "5px",
                border: "none",
              }}
            />
            <input
              placeholder="muddati"
              style={{
                position: "absolute",
                background: '#274463',
                height: "25px",
                top: "180px",
                left: "310px",
                width: "80px",
                outline: "none",
                borderRadius: "10px",
                padding: "5px ",
                border: "none",
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "150px",
              border: "1px solid #274463",
              marginTop: "130px",
              background: " background:'#274463',",
              marginLeft: "130px",
            }}
          >
            Tasdiqlash
          </Button>
        </Box>
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "relative",
          zIndex: "98989898",
          bottom: "740px",
          left: "610px",
          color: "white",
          border: "1px solid balck",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default Editcard;
