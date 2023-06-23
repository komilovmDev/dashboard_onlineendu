import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const shoot = () => {
      alert("Great Shot!");
    }
  return (
    <Box m="25px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="O`quvchilar soni"
            progress="0.75"
            increase="+14%"
            icon={
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="To`xtatilgan o`quvchilar"
            progress="0.25"
            increase="-10%"
            icon={
              <GroupRemoveIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12.300"
            subtitle="Bali baland o`quvchilar  "
            progress="0.80"
            increase="+45%"
            icon={
              <SchoolIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1.200"
            subtitle="Bali pas o`quvchilar"
            progress="0.25"
            increase="-5%"
            icon={
              <SchoolIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <div style={{
                display:'flex'
              }}>
              <Typography
              position={"relative"}
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                
              >
                Revenue Generated
              </Typography>

              <Typography
               position={"relative"}
                variant="h3"
                right="129px"
                top={"20px"}
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
              </div>

              <div style={{
                display:'flex'
              }}>
              <Typography
              position={"relative"}
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                left="170px"
                bottom={"28px"}
              >
                Waiting Revenue Generated
              </Typography>
           
            

              <Typography
                position={"relative"}
                left="17px"
                bottom="8px"
                variant="h3"
                fontWeight="bold"
                color={"#9370DB"}
              >
                $59,342.32
              </Typography>

              </div>

              
              <div style={{
                display:'flex',
              }}>
              <Typography
              position={"relative"}
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                left="413px"
                bottom={"58px"}
              >
                Stop  student
              </Typography>
           
            

              <Typography
                position={"relative"}
                left="300px"
                bottom="38px"
                variant="h3"
                fontWeight="bold"
                color={"red"}
              >
                $ -59,342.32
              </Typography>

              </div>


            <div style={{
              position:'relative',
              display:'flex'
            }}> 
            <hr style={{
            position:'absolute',
            border:'1px solid gray',
            width:'900px',
            top:'140px',
            left:'29px'
            }} />


              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'6px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"4px"
              }}>
              Sentabr
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'79px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
              Oktabr
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'159px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
              Noyabr
              </div>
              </div>
             
              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'240px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
             Dekabr
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'327px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
              Yanvar
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'407px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
                Fevral
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'492px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
              Mart
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'572px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
              Aprel
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'650px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"19px"
              }}>
              May
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'730px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"18px"
              }}>
              Iyun
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'810px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"19px"
              }}>
              Iyul
              </div>
              </div>

              <div
              style={{
                position:'absolute',
                borderBottom:'2px solid 	#2E8B57',
                width:'55px',
                height:'20px',
                left:'890px',
                top:'140px',
                background:'transparent',
                fontSize:'12px'
              }}           
            >
              <div style={{
                position:'relative',
                left:"10px"
              }}>
              Avgust
              </div>
              </div>

              </div>

              

            </Box>
            <Box>
              {/* <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton> */}
            </Box>
          </Box>
          <Box height="250px" m="-60px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Qarzdorlar Ro`yhati
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                - {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Course amount
          </Typography>
          <Box height="250px" mt="-40px">
            <label for="date" style={{marginLeft:'300px'}}>Choose day / month / year :</label>
            <select id="day" type="text" label style={{marginLeft:'10px',width:'80px',background:'#1db57d',color:"#fff"}}>
              <option  value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </select>
            <select id="month" type="text" label style={{marginLeft:'10px',width:'80px',background:'#1db57d',color:"#fff"}}>
              <option  value="1">Sentyabr</option>
              <option value="2">Oktyabr</option>
              <option value="3">Noyabr</option>
              <option value="4">Dekabr</option>
              <option value="5">Yanvar</option>
              <option value="6">Fevral</option>
              <option value="7">Mart</option>
              <option value="7">Aprel</option>
              <option value="7">May</option>
              <option value="7">Iyun</option>
              <option value="7">Iyul</option>
              <option value="7">Avgust</option>
            </select>
            <select id="year" type="text" style={{marginLeft:'10px',width:'60px',background:'#1db57d',color:"#fff"}}>
              <option value="2000">2015</option>
              <option value="2000">2016</option>
              <option value="2000">2017</option>
              <option value="2000">2018</option>
              <option value="2000">2019</option>
              <option value="2000">2020</option>
              <option value="2000">2021</option>
              <option value="2000">2022</option>
              <option value="2000">2023</option>
            </select>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
