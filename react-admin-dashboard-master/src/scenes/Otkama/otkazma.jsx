import { Box, Button, Typography, Link as A } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const Otkazma = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        className="vit"
        sx={{
          position: "relative",
          width: "450px",
          height: "800px",
          left: "436.9px",
          marginTop: "50px",
          borderRadius: "15px",
          border: "1px solid #274463",
          padding: "20px",
          boxShadow: "0px 5px 20px  rgb(33, 76, 122)",
          gap: "0",
        }}
      ></Box>
      <div
        style={{
          display: "flex",
        }}
      >
        {/* <div style={{
          position: 'relative',
          border: '1px solid red',
          width: '310px',
          background: '#214f80',
          borderRadius: "12px",
          right: '200px',
          color: "white",
          height: '70px',
          marginBottom: '410px',
        }}>
          <div style={{
            position: 'absolute',
            left: "49px",
            top: "23px",
          }}>
            Asadov Asad
          </div> */}

        <input
          type="number"
          placeholder="Qarta raqamni qriting"
          style={{
            position: "relative",
            border: "1px solid #214f80",
            width: "359.9px",
            left: "70px",
            height: "50px",
            borderRadius: "12px",
            bottom: "343px",
            padding: "26px",
            background: "#214f80",
            color: "white",
          }}
        />
        <div
          style={{
            position: "relative",
            border: "1px solid #214f80",
            width: "450px",
            background: "#214f80",
            borderRadius: "12px",
            right: "372px",
            color: "white",
            height: "50px",
            top: "401px",
          }}
        ></div>
      </div>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "relative",
          border: "1px solid red",
          height: "49px",
          zIndex: "98989898",
          bottom: "340px",
          right: "820px",
          color: "white",
          border: "1px solid balck",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>
      <div
        style={{
          position: "absolute",
          width: "450px",
          background: "transparent",
          right: "600px",
          color: "white",
          height: "690px",
          top: "179px",
          marginBottom: "410px",
          zIndex: "999988888",
          overflow: "auto",
        }}
      >
        <Link to={"/Otkama/Alan"} style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "absolute",
              width: "210px",
              height: "59px",
              color: "white",
              left: "9px",
              top: "23px",
              border: "1px solid #214f80",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#214f80",
                top: "10px",
                left: "10px",
              }}
            ></Box>
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                left: "56px",
                bottom: "23px",
              }}
            >
              Akmal Akmalov
            </Typography>
          </div>
          <div
            style={{
              position: "relative",
              width: "23px",
              top: "40px",
              color: "white",
              left: "31px",
              fontSize: "16px",
            }}
          >
            A A
          </div>
        </Link>

        <Link to={"/Otkama/Alan"} style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "absolute",
              width: "210px",
              height: "59px",
              color: "white",
              left: "9px",
              top: "93px",
              border: "1px solid #214f80",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#214f80",
                top: "10px",
                left: "10px",
              }}
            ></Box>
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                left: "56px",
                bottom: "23px",
              }}
            >
              Akmal Akmalov
            </Typography>
          </div>
          <div
            style={{
              position: "relative",
              width: "23px",
              color: "white",
              top: "87px",
              left: "31px",
              fontSize: "16px",
            }}
          >
            A A
          </div>
        </Link>

        <Link to={"/Otkama/Alan"} style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "absolute",
              width: "210px",
              height: "59px",
              color: "white",
              left: "9px",
              top: "169px",
              border: "1px solid #214f80",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#214f80",
                top: "10px",
                left: "10px",
              }}
            ></Box>
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                left: "56px",
                bottom: "23px",
              }}
            >
              Akmal Akmalov
            </Typography>
          </div>
          <div
            style={{
              position: "relative",
              width: "23px",
              top: "138px",
              color: "white",
              left: "30px",
              fontSize: "16px",
            }}
          >
            A A
          </div>
        </Link>

        <Link to={"/Otkama/Alan"} style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "absolute",
              width: "210px",
              height: "59px",
              color: "white",
              left: "9px",
              top: "248px",
              border: "1px solid #214f80",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#214f80",
                top: "10px",
                left: "10px",
              }}
            ></Box>
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                left: "56px",
                bottom: "23px",
              }}
            >
              Akmal Akmalov
            </Typography>
          </div>
          <div
            style={{
              position: "relative",
              width: "23px",
              top: "194px",
              color: "white",
              left: "30px",
              fontSize: "16px",
            }}
          >
            A A
          </div>
        </Link>
      </div>
    </Box>
  );
};

export default Otkazma;
