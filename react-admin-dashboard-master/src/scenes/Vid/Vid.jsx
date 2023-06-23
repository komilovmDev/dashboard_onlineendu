
import { Box, Button, Typography, Link as A } from '@mui/material'
import { Link } from "react-router-dom"
import "../payme/index.css"
const Vid = () => {

  

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>

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
        <div style={{
          fontSize: '23px',
          position:'relative',
          top:"180px",
          textAlign:"center"
        }}>
          SMS code
        </div>
        <input type="number" style={{
          position: 'relative',
          border: '1px solid #214f80',
          width: '390px',
          background: '#214f80',
          borderRadius: "12px",
          left: '10px',
          color: "white",
          height: '50px',
          marginTop: '250px',
        }} />
        <Box sx={{height:"300px",display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Link to={"/Vid/Vada"}>
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
      </Box>


        {/* <Link  style={{ textDecoration: "none" }}>
        <Button className="vit"
          variant="contained"
          sx={{
            position: 'relative',
            border: "1px solid  #274463",
            width: "300px",
            top: "190px",
            right: "395px",
            height: "40px",
          }}
        ><div style={{
          color: " #274463"
        }}>
            TASDIQLASH
          </div>
        </Button>
      </Link> */}
    </Box>

  )
}

export default Vid