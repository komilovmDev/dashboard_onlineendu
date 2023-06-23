import { Box, Button} from "@mui/material";
import React from "react";
import Popper from "@mui/material/Popper";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./cards.css";
const Cards = () => {
  const navigate = useNavigate();

  let [Shadow,setShadow] = React.useState(true)
  let [Shadow1,setShadow1] = React.useState(true)
  let [Shadow2,setShadow2] = React.useState(true)

  let [__Box,set__Box] = React.useState(true)
  let [__Box1,set__Box1] = React.useState(true)
  let [__Box2,set__Box2] = React.useState(true)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card">
          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "40px",
              marginTop: "50px",
              marginLeft: "130px",
            }}
          >
            <Link
              to={"/payme/editcard"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Karta qo`shish
            </Link>
          </Button>

            <Box className={__Box ? "None" : "Box__btn"}>
              <Box className="mini__Box" onClick={() => {Shadow ? setShadow(false) : setShadow(true)}}>
                Asosiy qarta
              </Box>
            </Box>
          <Box
            onClick={() => {__Box ? set__Box(false) : set__Box(true);}}
            sx={{
              cursor:"pointer",
              width: "80%",
              height: "180px",
              margin:'auto',
              position:'relative',
              top:"15px",
            }}
            className={Shadow ? "" : "Btn_shdow"}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXNld4gd-PnSJKlfz4herbmeYLgud9xnA_1KqoUpA71xHLwEn_3eIY3iV-Nct0C3KtOI&usqp=CAU"
              width="100%"
              height="100%"
              alt=""
            />
            <p style={{ position: "absolute", top: "0", left: "20px" }}>Humo</p>
            <p
              style={{
                position: "absolute",
                top: "90px",
                left: "20px",
                fontSize: "20px",
              }}
            >
              500.000 so`m
            </p>
            <p
              style={{
                position: "absolute",
                bottom:"20px",
                left: "20px",
                margin:"0",
                fontSize: "12px",
              }}
            >
              9860********3232
            </p>
            <p
              style={{
                position: "absolute",
                bottom:"20px",
                right:"20px",
                margin:"0",
                fontSize: "12px",
              }}
            >
              05/28
            </p>
          </Box>
          <Box className={__Box ? "None" : "Box__btn"}>
              <Box className="mini__Box" onClick={() => {Shadow ? setShadow(false) : setShadow(true)}}>
                Asosiy qarta
              </Box>
            </Box>


            <Box className={__Box2 ? "None" : "Box__btn2"}>
              <Box className="mini__Box" onClick={() => {Shadow2 ? setShadow2(false) : setShadow2(true)}}>
                Asosiy qarta
              </Box>
            </Box>
          <Box
            onClick={() => {__Box2 ? set__Box2(false) : set__Box2(true);}}
            sx={{
              cursor:"pointer",
              width: "80%",
              height: "180px",
              margin:'auto',
              position:'relative',
              top:"15px",
              mt:"50px"
            }}
            className={Shadow2 ? "" : "Btn_shdow"}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXNld4gd-PnSJKlfz4herbmeYLgud9xnA_1KqoUpA71xHLwEn_3eIY3iV-Nct0C3KtOI&usqp=CAU"
              width="100%"
              height="100%"
              alt=""
            />
            <p style={{ position: "absolute", top: "0", left: "20px" }}>Humo</p>
            <p
              style={{
                position: "absolute",
                top: "90px",
                left: "20px",
                fontSize: "20px",
              }}
            >
              500.000 so`m
            </p>
            <p
              style={{
                position: "absolute",
                bottom:"20px",
                left: "20px",
                margin:"0",
                fontSize: "12px",
              }}
            >
              9860********3232
            </p>
            <p
              style={{
                position: "absolute",
                bottom:"20px",
                right:"20px",
                margin:"0",
                fontSize: "12px",
              }}
            >
              05/28
            </p>
          </Box>


            <Box className={__Box1 ? "None" : "Box__btn1"}>
              <Box className="mini__Box" onClick={() => {Shadow1 ? setShadow1(false) : setShadow1(true)}}>
                Asosiy qarta
              </Box>
            </Box>
          <Box
            onClick={() => {__Box1 ? set__Box1(false) : set__Box1(true);}}
            sx={{
              cursor:"pointer",
              width: "80%",
              height: "180px",
              margin:'auto',
              position:'relative',
              top:"15px",
              mt:"50px"
            }}
            className={Shadow1 ? "" : "Btn_shdow"}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXNld4gd-PnSJKlfz4herbmeYLgud9xnA_1KqoUpA71xHLwEn_3eIY3iV-Nct0C3KtOI&usqp=CAU"
              width="100%"
              height="100%"
              alt=""
            />
            <p style={{ position: "absolute", top: "0", left: "20px" }}>Humo</p>
            <p
              style={{
                position: "absolute",
                top: "90px",
                left: "20px",
                fontSize: "20px",
              }}
            >
              500.000 so`m
            </p>
            <p
              style={{
                position: "absolute",
                bottom:"20px",
                left: "20px",
                margin:"0",
                fontSize: "12px",
              }}
            >
              9860********3232
            </p>
            <p
              style={{
                position: "absolute",
                bottom:"20px",
                right:"20px",
                margin:"0",
                fontSize: "12px",
              }}
            >
              05/28
            </p>
          </Box>
        </div>
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "relative",
          zIndex: "98989898",
          bottom: "770px",
          left: "609px",
          color: "white",
          border: "1px solid black",
        }}t
      >
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default Cards;
