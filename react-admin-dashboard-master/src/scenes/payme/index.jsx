import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Scaner from "../../assets/scaner.png";
import Qrkod from "../../assets/qr kod.png";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import './index.css'

import zIndex from "@mui/material/styles/zIndex";
const Payme = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "450px",
            height: "850px",
            marginTop: "10px",
            boxShadow: '0px 5px 20px  rgb(33, 76, 122)',
            marginLeft: "470px",
            borderRadius: "15px",
            border: "1px solid gray",
          }}
        >
          <Box className="vit"
            sx={{
              width: "448px",
              borderRadius: "15px",
              height: "805px",
              position: "relative",
              zIndex: "9999",
            }}
          ></Box>

          <Typography
            variant="h3"
            sx={{
              position: "relative",
              zIndex: "9999",
              bottom: "710px",
              left: "30px",
              fontFamily:'-moz-initial'
            }}
          >
            Umumiy balans
          </Typography>

          <Typography
            variant="h4"
            sx={{
              position: "relative ",
              zIndex: "9999",
              bottom: '699px',
              left: "30px",
              fontFamily:'-moz-initial'
            }}
          >
            100.000.000 so`m
          </Typography>

          <Typography
            variant="h4"
            sx={{
              position: "relative ",
              zIndex: "9999",
              bottom: '680px',
              left: "30px",
              fontSize: '12px',
              fontFamily:'-moz-initial'
            }}
          >
            Keshbek  0.1%
          </Typography>

          <Typography
            variant="h4"
            sx={{
              position: "relative ",
              zIndex: "9999",
              bottom: '678px',
              left: "30px",
              fontSize: '12px',
              fontFamily:'-moz-initial'
            }}
          >
            200.000 so`m
          </Typography>

          <Link
            to={"/payme/cards"}
            style={{
              position: "relative",
              zIndex: "9999999",
              color: "white",
              bottom: "649px",
              left: "300px",
              textDecoration: "none",
              display: "flex",
              gap: "3px",
              alignItems: "center",
              
            }}
          >
            <PlayCircleFilledIcon />
            <p style={{fontFamily:'-moz-initial'}}>Kartalarga o`tish</p>
          </Link>

        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: "9999888",
            top: '160px',
            right: "450px",
            width: "450px",
            height: "540px",
            padding: "160px 0px",
            background: "transparent",
            overflow: "auto",
          }}
        >
          <br />
          <Box
            sx={{
              position: "relative",
              zIndex: "99999",
              width: "100px",
              height: "102px",
              background: "#274463",
              border: '1px solid white',
              borderRadius: "10px",
              boxShadow: " 4px 3px 14px 10px  rgb(33, 76, 122)",
              left: "30px",
              bottom: "170px",
              gap: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={Scaner}
              style={{ marginTop: "12px", marginLeft: "23px" }}
              width={50}
              height={50}
              alt=""
            />
            <Link
              to={"/payme/scaner"}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "13px",
                marginTop: "6px",
                marginLeft: "13px",
                fontFamily:'-moz-initial'
              }}
            >
              UzMit scaner
            </Link>
          </Box>

          <Box
            sx={{
              position: "relative",
              zIndex: "99999",
              width: "100px",
              height: "102px",
              background: "#274463",
              border: '1px solid white',
              boxShadow: " 4px 3px 14px 10px  rgb(33, 76, 122)",
              padding: "10px",
              borderRadius: "10px",
              left: "180px",
              bottom: "270px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <LibraryBooksIcon
              sx={{
                marginTop: "5px",
                marginLeft: "12px",
                width: "50px",
                height: "50px",
              }}
            />

            <Link
              to={"/payme/viewSave"}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "13px",
                marginLeft: "4px",
                fontFamily:'-moz-initial'
              }}
            >
              Check money
            </Link>
          </Box>

          <Box
            sx={{
              position: "relative ",
              zIndex: "99999",
              width: "100px",
              height: "102px",
              background: "#274463",
              border: '1px solid white',
              boxShadow: " 4px 3px 14px 10px  rgb(33, 76, 122)",
              padding: "10px",
              borderRadius: "10px",
              left: "330px",
              bottom: "372px",
              gap: "3px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={Qrkod}
              style={{ marginTop: "5px", marginLeft: "14px" }}
              width={50}
              height={50}
              alt=""
            />
            <Link
              to={"/payme/qrcode"}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "13px",
                marginTop: "5px",
                marginLeft: "16px",
                fontFamily:'-moz-initial'
              }}
            >
              Qr code
            </Link>

            <Link to={"/Payme/Otkama"} style={{ textDecoration: "none" }}>
            <Box sx={{
              position: "relative ",
              zIndex: "99999",
              width: "410px",
              height: "72px",
              background: "#274463",
              marginTop: "25px",
              border: '1px solid white',
              padding: "40px",
              borderRadius: "10px",
              right: "320px",
              gap: "3px",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                position:'absolute',
                // border:'1px solid red',
                width:"79px",
                height:'70px',
                right:'168px',
                color:"white",
                padding:'22px',
                bottom:"20px",
                fontSize:"13px",
              }}>
           < AccountBalanceWalletIcon  sx={{
            fontSize:'40px'
           }}/>
           <div style={{
            position:'relative',
            right:'21px',
            bottom:'7px',
            fontSize:'15px',
            fontFamily:'-moz-initial'
           }}>
            O`tkazmalar
           </div>
            </div>
            </Box>
            </Link>

            <div style={{
              position: "relative ",
              width: '200px',
              right: '320px',
              top: '18px',
              margin: "2px",
              fontFamily:'-moz-initial'
            }}>Mobil aloqa uchun to`lov</div>
            <div style={{
              position: "relative ",
              display: "flex",
              right: "320px",
              top: '20px'
            }}>
              <input
                type="number"
                style={{
                  border: "1px solid  #214f80",
                  width: '550px',
                  background: "#274463",
                  color: "white",
                  height: '43px',
                  borderRadius: "12px"
                }}
              />
              <Link to={"/Payme/oloka"} style={{ textDecoration: "none" }}>
                <Button class="x" style={{
                  fontFamily:'-moz-initial'
                }}>
                  To`lash
                </Button>
              </Link>
              <div className="sava" style={{
                fontFamily:'-moz-initial'
              }}>
                Talim uchun tolov
              </div>
            </div>
          </Box>

          <div
            className="box scrollhide"
            style={{
              position: "relative ",
              width: "400px",
              bottom: "150px",
              right: '-18px',
              display: "flex",
              overflowX: "auto",
              gap: "15px"

              // border: '1px solid red'
            }}
          >
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
            <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
              <button className="vat"
                style={{
                  marginTop: "10px",
                  minWidth: "90px",
                  background: "#22718f",
                  height: "80px",
                  border: "2px solid #274463",
                  color: "black",
                  borderRadius: '7px'
                }}
              >
                Data
              </button>
            </Link>
             </div>

          {/* <hr style={{ margin: "10px",}} /> */}
          <Box
            sx={{
              padding: "20px",
              marginTop: "-90px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                position:'relative',
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                border: "1px solid #164D9F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bottom:'31px',
              }}
            >
              <ArrowDownwardIcon
                sx={{
                  position:"relative",
                  left:"19px",
                  color: "#164D9F", 
                  width: "40px", 
                  height: "40px",
                  bottom:"10px"
                }}
              />
               <div style={{
                position:'relative',
                top:'40px',
                right:'19px',
                color:"#164D9F",
              }}>
                Tushim
              </div>
            </Box>

            <Box
              sx={{
                position:'relative',
                width: "140px",
                height: "140px",
                marginLeft: "20px",
                borderRadius: "50%",
                border: "1px solid red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bottom:'31px',
              }}
            >
              <ArrowUpwardIcon
                sx={{ position:"relative" ,color: "red", width: "40px", height: "40px",left:"19px",bottom:"10px" }}
              />
              <div style={{
                position:'relative',
                top:'40px',
                right:'19px',
                color:"red",
              }}>
                Chqim
              </div>
            </Box>
          </Box>
       {/* <hr style={{
        position:'absolute',
        width:'420px',
        left:'15px',
        bottom:'32px',
       }} /> */}
          <Box
            sx={{
              position:'absolute',
              top:"630px",
              width: "100%",
              height: "fit-content",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ color: "#164D9F", borderRight: "1px solid gary", marginLeft: "-50px" }}>
              + 200.000
            </Box>

            <Box sx={{ color: "red", marginRight: '-40px' }}>- 200.000</Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          border: '1px solid white',
          width: "450px",
          height: '78px',
          borderRadius: '12px',
          background: "#274463",
          position: "relative",
          zIndex: "98989898",
          bottom: "79px",
          left: "610px",
        }}
      >
        
        <p style={{
          position: 'relative',
          top: '28px',
          left: "191px",
          fontSize: "14px",
          fontFamily:'-moz-initial'
        }}>
          Keshbekni <br /><div style={{
            fontFamily:'-moz-initial',
            position: 'relative',
            fontSize:'14px',
            right: '20px'
          }}> kartaga tushurish</div>
        </p>

        <button style={{
          position: "relative",
          background: "#2fa0bb",
          width: '60px',
          height: '55px',
          border: '1px solid #2fa0bb',
          borderRadius: "10px",
          left: '193px',
          bottom: "70px"
        }}>
      <CreditScoreIcon sx={{
        position:'relative',
        fontSize:'50px',
        right:'2px',
        color:'white',
      }}/>
        </button>

      </Box>
      {/* <Link to={"/Payme/goback"} style={{ textDecoration: "none" }}>
        <Button
          // onClick={() => navigate(-1)}
          variant="outlined"
          sx={{
            position: "relative",
            color: 'white',
            position: "relative",
            zIndex: "98989898",
            bottom: "899px",
            left: "625px",
          }}
        >
          go back
        </Button>
      </Link> */}
    </>
  );
};

export default Payme;
