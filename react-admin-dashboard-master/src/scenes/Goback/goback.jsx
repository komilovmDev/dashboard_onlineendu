import { Box, Button, Typography, Link as A } from '@mui/material'
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const Goback = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

      <Box className="vit"
        sx={{
          position: "relative",
          width: "450px",
          height: "800px",
          left: '586.9px',
          marginTop: "50px",
          borderRadius: "15px",
          border: "1px solid #274463",
          padding: "20px",
          boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
          gap: "0",
        }}
      >

      </Box>
      <div style={{
        position: 'relative',
        fontSize: '23px',
        width: "280px",
        bottom: "330px",
        left: "270px",
        // border: '1px solid red'
      }}>
        Data talim stansiyasi
      </div>
      <div style={{
        position: 'relative',
        fontSize: '12px',
        width: "210px",
        bottom: "280px",
        left: "38px",
        // border: '1px solid red'
      }}>
        To`lov ma`lumotlari
      </div>
      <div style={{
        position: 'relative',
        fontSize: '12px',
        width: "210px",
        bottom: "250px",
        right: "315px",
        // border: '1px solid red'
      }}>
        O`kuvmarkaz nomi
      </div>
      <div style={{
        display: 'flex'
      }}>
        <div style={{
          position: 'relative',
          border: '1px solid #214f80',
          width: '410px',
          background: '#214f80',
          borderRadius: "12px",
          right: '542px',
          color: "white",
          height: '50px',
          marginBottom: '410px',
        }}>
          <div style={{
            position: 'absolute',
            left: "27px",
            top: "10px",
          }}>
            Data talim stansiyasi
          </div>
          <div style={{
            position: 'relative',
            fontSize: "12px",
            width: '120px',
            top: "70px",
            left: '19px',
          }}>
            To`lov summasi
          </div>
          <input type="number"
            style={{
              position: 'relative',
              border: '1px solid #214f80',
              width: '410px',
              height: "50px",
              padding:"27px",
              borderRadius: "12px",
              top: "72px",
              background: "#214f80",
              color: "white",
            }}
          />
          <Link to={"/goback/tushun"} style={{ textDecoration: "none" }}>
            <input type="number"
              style={{
                position: 'relative',
                border: '1px solid #214f80',
                width: '410px',
                height: "50px",
                borderRadius: "12px",
                top: "134px",
                background: "#214f80",
                color: "white",
              }}
            />
          </Link>
        </div>
        <div style={{
          position: "absolute",
          left: "909px",
          top: "430px",
          fontSize: "12px",
        }}>
          Agar sizda plastik kartichga orkali
          tolov qila olmasingiz
          siz uchun tolov qila <br /> oladigan
          insonni  telefon   raqmini qriting
        </div>
        <Link to={"/goback/Talim"} style={{ textDecoration: "none" }}>
          <button style={{
            position: "absolute",
            border: '1px solid #214f80',
            width: '160px',
            height: "52px",
            borderRadius: "12px",
            background: "#214f80",
            top: '820px',
            left: "1100px",
          }}>
            Tasdiqlash
          </button>
        </Link>
        <Button
         onClick={() => navigate(-1)}
          variant="outlined"
          sx={{
            position: "relative",
            border: "1px solid red",
            height: "36px",
            zIndex: "98989898",
            bottom: "119px",
            right: "960px",
            color: "white",
            border: "1px solid balck",
          }}
        >
          <KeyboardBackspaceIcon />
        </Button>
      </div>
    </Box >
  )
}

export default Goback