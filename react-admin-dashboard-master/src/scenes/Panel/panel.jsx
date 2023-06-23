import { FontDownloadOffTwoTone } from '@mui/icons-material'
import { Box, Button, Typography, Link as A } from '@mui/material'
import { Link } from "react-router-dom"
const panel = () => {
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
          // border: '1px solid red',
          width: "100px",
          left: "160px",
          fontSize: '23px',
        }}>
          Chek
        </div>
        <div>
          <tr style={{
            position: 'absolute',
            display: "flex",
            fontSize: "14px",
            top: "100px"
          }}>
            <tr> Nomi:</tr>
            <tr style={{
              marginLeft: "284px",
            }}>Asadov Asad</tr>
          </tr>
          <tr style={{
            position: 'absolute',
            width: "499px",
            // border: '1px solid red',
            display: "flex",
            fontSize: "14px",
            top: "130px"
          }}>
            <tr> Karta raqami:</tr>
            <tr style={{
              marginLeft: "224px",
            }}>981234***2345</tr>
          </tr>
          <tr style={{
            position: 'absolute',
            width: "499px",
            // border: '1px solid red',
            display: "flex",
            fontSize: "14px",
            top: "160px"
          }}>
            <tr> Summa:</tr>
            <tr style={{
              marginLeft: "297px",
            }}>- 42 000</tr>
          </tr>
          <tr style={{
            position: 'absolute',
            width: "499px",
            // border: '1px solid red',
            display: "flex",
            fontSize: "14px",
            top: "190px"
          }}>
            <tr> Sana:</tr>
            <tr style={{
              marginLeft: "259px",
            }}>11.06.2023 13:21</tr>
          </tr>
          <tr style={{
            position: 'absolute',
            width: "499px",
            // border: '1px solid red',
            display: "flex",
            fontSize: "14px",
            top: "220px"
          }}>
            <tr> Balans:</tr>
            <tr style={{
              marginLeft: "268px",
            }}>200 000 so`m</tr>
          </tr>
          <tr style={{
            position: 'absolute',
            width: "499px",
            // border: '1px solid red',
            display: "flex",
            fontSize: "14px",
            top: "250px"
          }}>
            <tr> Komissiya:</tr>
            <tr style={{
              marginLeft: "299px",
            }}>0.5%</tr>
          </tr>
          <tr style={{
            position: 'absolute',
            width: "499px",
            // border: '1px solid red',
            display: "flex",
            fontSize: "14px",
            top: "280px"
          }}>
            <tr> Umumiy balans:</tr>
            <tr style={{
              marginLeft: "209px",
            }}>152 300 so`m</tr>
          </tr>
        </div>
        <Link to={"/panel/payme"} style={{ textDecoration: "none" }}>
          <button style={{
            position: "absolute",
            border: '1px solid #214f80',
            width: '360px',
            height: "52px",
            borderRadius: "12px",
            background: "#214f80",
            top: '620px',
            left: "47px",
          }}>
            Asosiy panelga otish
          </button>
        </Link>
      </Box>
    </Box>
  )
}

export default panel