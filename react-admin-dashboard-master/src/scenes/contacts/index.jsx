import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState } from "react";
import CooseCourse from "../chooseCourse";

const Contacts = () => {
  const [showCourse, setShowCourse] = useState();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "nameSurname",
      headerName: "Name and Surname",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "year",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "secondNumber",
      headerName: "Second Person Number",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "course",
      headerName: "Kursi",
      flex: 1,
    },
    {
      field: "group",
      headerName: "Guruhi",
      flex: 1,
    },
    {
      field: "teacherName",
      headerName: "Ustozining ismi",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "To`lov",
      flex: 1,
    },
  ];

  return (
    <Box m="20px" sx={{ position: "relative", height: "80vh" }}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="899px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "105px",
          left: "300px",
          zIndex: "9989898",
        }}
      >
        <IconButton onClick={() => setShowCourse(!showCourse)} sx={{}}>
          <AssignmentIcon />
        </IconButton>
      </Box>
      {showCourse && <CooseCourse />}
    </Box>
  );
};

export default Contacts;
