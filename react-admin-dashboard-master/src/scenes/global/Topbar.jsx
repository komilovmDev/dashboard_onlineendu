import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import { useState } from "react";
import ThirdToogle from "../thirdToggle.jsx/thirdToggle";
import LastToogle from "../lastToogle";
import SendToogle from "../sendToggle/sendToogle.jsx"

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [showToggleMEnu, setShowToggleMenu] = useState(false);
  const [showToggleMenu2, setShowToggleMenu2] = useState(false);
  const [showToggleMenu3, setShowToggleMenu3] = useState(false);

  function isOpen() {
    setShowToggleMenu(true)
    setShowToggleMenu2(false)
    setShowToggleMenu3(false)
    if (showToggleMEnu == true) {
      setShowToggleMenu(false)
    }
  }
  function isOpen2() {
    setShowToggleMenu(false)
    setShowToggleMenu2(true)
    setShowToggleMenu3(false)
    if (showToggleMenu2 == true) {
      setShowToggleMenu2(false)
    }
  }
  function isOpen3() {
    setShowToggleMenu(false)
    setShowToggleMenu2(false)
    setShowToggleMenu3(true)
    if (showToggleMenu3 == true) {
      setShowToggleMenu3(false)
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.transparent}
        borderRadius="3px"
      >
        {/* <buttonBase sx={{ ml: 2, flex: 1 }} placeholder="" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* <IconButton>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <IconButton onClick={() => isOpen()}>
          <GroupIcon />
        </IconButton>
        <IconButton onClick={() => isOpen2()}>
          <HomeIcon />
        </IconButton>
        <IconButton onClick={() => isOpen3()}>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
      {showToggleMEnu && <SendToogle />}
      {showToggleMenu2 && <LastToogle />}
      {showToggleMenu3 && <ThirdToogle />}
    </Box>
  );
};

export default Topbar;
