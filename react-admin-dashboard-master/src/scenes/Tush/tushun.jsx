import { FontDownloadOffTwoTone } from '@mui/icons-material'
import { Box, Button, Typography, Link as A } from '@mui/material'
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
const Tushun = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      <Box className="vit"
        sx={{
          position: "relative",
          width: "450px",
          height: "800px",
          left: '1px',
          marginTop: "50px",
          borderRadius: "15px",
          border: "1px solid #274463",
          padding: "20px",
          boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
          gap: "0",
        }}
      >
        <div style={{
          position: "relative",
          width: "400px",
          height: "200px",
          borderRadius: "20px",
          border: '1px solid #274463',
          top: "230px",
        }}>
          <div style={{
            position: "absolute",
            left: '90px',
            top: "37px",
            fontSize: "23px"
          }}>
            Siz qiritgan telefon raqamga sms borde <br /> shu smsdagi url orqali registratsiadan otsin
          </div>
        </div>
        <Button
         onClick={() => navigate(-1)}
          variant="outlined"
          sx={{
            position: "relative",
            border: "1px solid red",
            zIndex: "98989898",
            bottom: "199px",
            left: "10px",
            color: "white",
            border: "1px solid balck",
          }}
        >
          <KeyboardBackspaceIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default Tushun