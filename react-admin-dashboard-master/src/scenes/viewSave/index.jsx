import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../payme/index.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Th from '../Tsh/tsh';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import Tsh from "../Tsh/tsh";
import Chk from "../Chk/chk";
const Saveview = () => {
  const navigate = useNavigate();
  const [editableRows, setEditableRows] = useState({});
  let a = document.querySelector('.start')
  const [displayStyle, setDisplayStyle] = useState('none')
  const [displayStyle_tt, setDisplayStyle_tt] = useState('none')
  // function shoot() {
  //   setDisplayStyle('flex')
  // }

  const handleEditClick = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
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
            marginLeft: "10px",
            borderRadius: "15px",
            border: "1px solid gray",
          }}
        >

          <Box className="vit"
            sx={{
              width: "448px",
              borderRadius: "15px",
              height: "847px",
              position: "relative",
              zIndex: "9999",
            }}
          >


            {/* <Typography variant="h5" sx={{ marginTop: "50px", color: 'gray' }}>
              Ism Familiya
            </Typography>
            <Typography variant="h4" sx={{ color: 'gray' }}>Asadov Asad</Typography>
            <Typography variant="h5" sx={{ color: 'gray' }}>Karta raqami</Typography>
            <Typography variant="h4" sx={{ color: 'gray' }}>9860 4354 2323 2331</Typography> */}

            <div style={{
              position: 'relative',
              border: '1px solid #274463',
              top: "65px",
              left: '66px',
              width: '321px',
              height: '160px',
              // #274463
            }}>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXNld4gd-PnSJKlfz4herbmeYLgud9xnA_1KqoUpA71xHLwEn_3eIY3iV-Nct0C3KtOI&usqp=CAU"
                width={319}
                height={160}
                alt=""
              />
              <p style={{ position: "absolute", top: "0", left: "20px", color: 'white', }}>Humo</p>

              <p
                style={{
                  position: "absolute",
                  top: "60px",
                  left: "16px",
                  fontSize: "21px",
                  color: 'white',
                  fontFamily: '-moz-initial'
                }}
              >
                9862 0122 3451 6781 3232
              </p>

              <p
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "63px",
                  fontSize: "7px",
                  color: 'white',
                  fontFamily: '-moz-initial'
                }}
              >
                VALID
              </p>
              <hr style={{
                position: 'relative',
                border: '1px solid white',
                width: "20px",
                bottom: '57px',
                left: '63px'
              }} />

              <p style={{
                position: "absolute",
                top: "109px",
                left: "63px",
                fontSize: "7px",
                color: 'white',
                fontFamily: '-moz-initial'
              }}>
                THRE
              </p>


              <p
                style={{
                  position: "absolute",
                  top: "102px",
                  left: "96px",
                  fontSize: "12px",
                  color: 'white',
                  fontFamily: '-moz-initial'
                }}
              >
                05/28
              </p>

              <p
                style={{
                  position: "absolute",
                  top: "116px",
                  left: "16px",
                  fontSize: "20px",
                  color: 'white',
                  fontFamily: '-moz-initial'
                }}
              >
                Asadov Asad
              </p>



            </div>
            <Box
              onClick={() => displayStyle == 'none' ? setDisplayStyle('flex') : setDisplayStyle('none')}
              className="vet"
              sx={{
                position: "relative",
                zIndex: "99999",
                width: "119px",
                height: "110px",
                border: '1px solid #274463',
                padding: "10px",
                borderRadius: "10px",
                left: "95px",
                top: "74px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "13px",
                  marginLeft: "20px",
                  fontFamily: '-moz-initial'
                }}
              >
                Tushimlar
              </div>

              <ArrowDownwardIcon
                sx={{
                  marginBottom: "6px",
                  marginLeft: "21px",
                  width: "50px",
                  height: "50px",
                }}
              />

              <div
                style={{
                  position: "relative",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "13px",
                  marginLeft: "20px",
                  fontFamily: '-moz-initial',
                  bottom: '10px',
                  color: '#11446c'

                }}
              >
                + 120 009
              </div>
            </Box>

            <Box
              onClick={() => displayStyle_tt == 'none' ? setDisplayStyle_tt('flex') : setDisplayStyle_tt('none')}
              className="vet"
              sx={{
                position: "relative",
                zIndex: "99999",
                width: "119px",
                height: "110px",
                border: '1px solid #274463',
                padding: "10px",
                borderRadius: "10px",
                left: "217px",
                bottom: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Link
                to={"/payme/viewSave"}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "13px",
                  marginLeft: "20px",
                  fontFamily: '-moz-initial'
                }}
              >
                Chiqimlar
              </Link>

              <ArrowUpwardIcon
                sx={{
                  marginBottom: "6px",
                  marginLeft: "21px",
                  width: "50px",
                  height: "50px",
                }}
              />

              <div
                style={{
                  position: "relative",
                  textDecoration: " ",
                  color: "white",
                  fontSize: "13px",
                  marginLeft: "20px",
                  fontFamily: '-moz-initial',
                  bottom: '10px',
                  color: 'red'

                }}
              >
                - 120 008
              </div>
            </Box>

            <div
              style={{
                position: 'absolute',
                width: '448px',
                border:'1px solid red',
                height: '492px',
                right: '0.1px',
                borderRadius: '12px',
                background: 'transparent',
                top: '355px',
                overflow: 'auto'
              }}>


              <div style={{
                position: 'relative',
                bottom: '15px'
              }}>

                <Link to={"/viewSave/Chek"} style={{ textDecoration: "none" }}>
                  <div
                    className="vat"
                    style={{
                      position: "relative",
                      border: '1px solid #274463',
                      width: '390px',
                      height: '60px',
                      left: '30px',
                      top: "40px",
                      borderRadius: '5px'

                    }}>

                    <ArrowUpwardIcon
                      className="vet"
                      sx={{
                        position: 'relative',
                        border: '1px solid #274463',
                        top: "7px",
                        color: 'white',
                        left: '20px',
                        borderRadius: '5px',
                        fontSize: '45px'
                      }} />


                      <div style={{
                        position: "relative",
                        width: '100px',
                        color: 'white',
                        left: '100px',
                        bottom: '33px'
                      }}>
                        Asadov Asadad
                      </div>

                    <div style={{
                      position: "relative",
                      // border: '1px solid red',
                      width: '90px',
                      fontSize: '13px',
                      left: '260px',
                      bottom: '63px',
                      color: 'red'
                    }}>
                      - 120 000 so`m
                    </div>

                    <div style={{
                      position: "relative",
                      // border: '1px solid red',
                      width: '80px',
                      fontSize: '10px',
                      left: '287px',
                      bottom: '60px',
                      color: 'white'
                    }}>
                      01 iyun 12:34
                    </div>

                    <OfflinePinIcon sx={{
                      position: 'relative',
                      // border: '1px solid red',
                      left: '360px',
                      bottom: '87px',
                      color: ' #274463'
                    }} />

                  </div>
                </Link>

                <div
                  className="vat"
                  style={{
                    position: "relative",
                    border: '1px solid #274463',
                    width: '390px',
                    height: '60px',
                    left: '30px',
                    top: "60px",
                    borderRadius: '5px'

                  }}>

                  <ArrowDownwardIcon
                    className="vet"
                    sx={{
                      position: 'relative',
                      border: '1px solid #274463',
                      top: "7px",
                      left: '20px',
                      borderRadius: '5px',
                      fontSize: '45px'
                    }} />


                  <div style={{
                    position: "relative",
                    width: '100px',
                    left: '100px',
                    bottom: '33px'
                  }}>
                    Asadov Asadad
                  </div>

                  <div style={{
                    position: "relative",
                    // border: '1px solid red',
                    width: '93px',
                    fontSize: '13px',
                    left: '260px',
                    bottom: '63px',
                    color: '#274463'
                  }}>
                    + 120 000 so`m
                  </div>

                  <div style={{
                    position: "relative",
                    // border: '1px solid red',
                    width: '80px',
                    fontSize: '10px',
                    left: '287px',
                    bottom: '60px',
                    color: 'white'
                  }}>
                    01 iyun 12:34
                  </div>

                  <OfflinePinIcon sx={{
                    position: 'relative',
                    // border: '1px solid red',
                    left: '360px',
                    bottom: '87px',
                    color: ' #274463'
                  }} />

                </div>

                <div
                  className="vat"
                  style={{
                    position: "relative",
                    border: '1px solid #274463',
                    width: '390px',
                    height: '60px',
                    left: '30px',
                    top: "80px",
                    borderRadius: '5px'
                  }}>

                  <ArrowDownwardIcon
                    className="vet"
                    sx={{
                      position: 'relative',
                      border: '1px solid #274463',
                      top: "7px",
                      left: '20px',
                      borderRadius: '5px',
                      fontSize: '45px'
                    }} />


                  <div style={{
                    position: "relative",
                    width: '100px',
                    left: '100px',
                    bottom: '33px'
                  }}>
                    Asadov Asadad
                  </div>

                  <div style={{
                    position: "relative",
                    // border: '1px solid red',
                    width: '93px',
                    fontSize: '13px',
                    left: '260px',
                    bottom: '63px',
                    color: '#274463'
                  }}>
                    + 120 000 so`m
                  </div>

                  <div style={{
                    position: "relative",
                    // border: '1px solid red',
                    width: '80px',
                    fontSize: '10px',
                    left: '287px',
                    bottom: '60px',
                    color: 'white'
                  }}>
                    01 iyun 12:34
                  </div>

                  <OfflinePinIcon sx={{
                    position: 'relative',
                    // border: '1px solid red',
                    left: '360px',
                    bottom: '87px',
                    color: ' #274463'
                  }} />

                </div>

                <div
                  className="vat"
                  style={{
                    position: "relative",
                    border: '1px solid #274463',
                    width: '390px',
                    height: '60px',
                    left: '30px',
                    top: "100px",
                    borderRadius: '5px'

                  }}>

                  <ArrowUpwardIcon
                    className="vet"
                    sx={{
                      position: 'relative',
                      border: '1px solid #274463',
                      top: "7px",
                      left: '20px',
                      borderRadius: '5px',
                      fontSize: '45px'
                    }} />


                  <div style={{
                    position: "relative",
                    width: '100px',
                    left: '100px',
                    bottom: '33px'
                  }}>
                    Asadov Asadad
                  </div>

                  <div style={{
                    position: "relative",
                    // border: '1px solid red',
                    width: '93px',
                    fontSize: '13px',
                    left: '260px',
                    bottom: '63px',
                    color: 'red'
                  }}>
                    - 120 000 so`m
                  </div>

                  <div style={{
                    position: "relative",
                    // border: '1px solid red',
                    width: '80px',
                    fontSize: '10px',
                    left: '287px',
                    bottom: '60px',
                    color: 'white'
                  }}>
                    01 iyun 12:34
                  </div>

                  <OfflinePinIcon sx={{
                    position: 'relative',
                    // border: '1px solid red',
                    left: '360px',
                    bottom: '87px',
                    color: ' #274463'
                  }} />

                </div>

              </div>



              <div className="start" style={{ display: displayStyle }}>
                <Tsh />
              </div>
              <div className="start" style={{ display: displayStyle_tt }}>
                <Chk />
              </div>
            </div>
          </Box>
        </Box >
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "relative",
          color: "white",
          zIndex: "98989898",
          bottom: "840px",
          left: "605px",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>

    </>
  );
};

export default Saveview;
