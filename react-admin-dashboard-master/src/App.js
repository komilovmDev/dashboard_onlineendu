import { useState } from "react";
import './index.css'
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import AddCourse from "./scenes/addcourse";
import Invoices from "./scenes/invoices";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Message from "./scenes/message/message";
import Contacts from "./scenes/contacts";
import Addgroup from "./scenes/addgroup/addgroup";
import Payment from "./scenes/payment";
import MonthlyType from "./scenes/monthType";
import Score from "./scenes/score";
import HighStudent from "./scenes/highStudent";
import LowStudent from "./scenes/student";
import Payme from "./scenes/payme";
import Scaner from "./scenes/scaner/scaner";
import Qrcode from "./scenes/qrcode/Qrcode";
import Saveview from "./scenes/viewSave";
import Cards from "./scenes/cards/cards";
import Editcard from "./scenes/editcard/Editcard";
import Vid from "./scenes/Vid/Vid";
import Vada from "./scenes/Vada/index";
import Goback from "./scenes/Goback/goback";
import Panel from "./scenes/Panel/panel";
import Tush from "./scenes/Tush/tushun";
import Oloka from "./scenes/Oloka/oloka";
import Otkama from "./scenes/Otkama/otkazma";
import Alan from "./scenes/Alan/alan";
import FAQ from "./scenes/faq";
import Talim from "./scenes/Talim/talim"
import lastToogle from "./scenes/lastToogle/index"
import SecondToogle from "./scenes/secondToggle/secondToggle";
import Tel from "./scenes/Tel/tel"
import Tushum from "./scenes/tushum/index"
import Chiqim from "./scenes/chiqim/index"
// import TelegramHome from "./scenes/chat/Tg"
import Tsh from "./scenes/Tsh/tsh"
import Chk from "./scenes/Chk/chk";
import Chek from "./scenes/Chek/chek";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/message" element={<Message />} />
              {/* <Route path="/chat" element={<TelegramHome />} /> */}
              <Route path="/team" element={<AddCourse />} />
              <Route path="/addgroup" element={<Addgroup />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/Vid" element={<Vid />} />
              <Route path="/Vid" element={<Vid/>} />
              <Route path="/Vid/Vada" element={< Vada/>} />
               <Route path="/Vada/payme" element={< Payme/>} />
              <Route path="/monthlyType" element={<MonthlyType />} />
              <Route path="/payme/scaner" element={<Scaner />} />
              <Route path="/payme/qrcode" element={<Qrcode />} />
              <Route path="/payme/viewSave" element={<Saveview />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/payme/cards" element={<Cards />} />
              <Route path="/payme/editcard" element={<Editcard />} />
              <Route path="/chat/slidebar" element={<Editcard />} />
              <Route path="/score" element={<Score />} />
              <Route path="/student" element={<LowStudent />} />
              <Route path="/highStudent" element={<HighStudent />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/Payme/Goback" element={<Goback/>} />
              <Route path="/Goback/Panel" element={<Panel/>} />
              <Route path="/Panel/payme" element={<Payme/>} />
              <Route path="/goback/tushun" element={<Tush/>} />
              <Route path="/Payme/Oloka" element={<Oloka/>} />
              <Route path="/Payme/Otkama" element={<Otkama/>} />
              <Route path="/Otkama/Alan" element={<Alan/>} />
              <Route path="/Goback/Talim" element={<Talim/>} />
              <Route path="/lastToogle/secondToggle" element={<SecondToogle/>} />
              <Route path="/oloka/tel" element={<Tel/>} />
              <Route path="/tel/payme" element={<Payme/>} />
              <Route path="/viewSave /tushum" element={<Tushum/>} />
              <Route path="/viewSave/Chiqim" element={<Chiqim/>} />
              <Route path="/viewSave/Tsh" element={<Tsh/>} />
              <Route path="/viewSave/chk" element={<Chk/>} />
              <Route path="/viewSave/Chek" element={<Chek/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
