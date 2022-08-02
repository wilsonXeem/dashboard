import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import TradingViewWidget from "react-tradingview-widget";
import { TickerTape } from "react-ts-tradingview-widgets";
import Dashboard from "./components/Dashboard";
import TechnicalAnalysis from "./components/TechnicalAnalysis";
import EconomicCalendar from "./components/EconomicCalender";
import Tools from "./components/Tools";
import Deposit from "./components/Deposit";
import Withdraw from "./components/WIthdraw";
import Profile from "./components/Profile";
// import FloatingWhatsApp from "react-floating-whatsapp";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <TradingViewWidget symbol="NASDAQ:AAPL" /> */}
        <Sidebar />
        <div className="content">
          <TickerTape showSymbolLogo={false} />
          <Routes>
            <Route exact path={`/:id`} element={<Dashboard />} />
            <Route exact path={`/:id/profile`} element={<Profile />} />
            <Route exact path={`/:id/deposit`} element={<Deposit />} />
            <Route exact path={`/:id/withdraw`} element={<Withdraw />} />
            <Route
              exact
              path={`/:id/economic-calendar`}
              element={<EconomicCalendar />}
            />
            <Route
              exact
              path={`/:id/technical-analysis`}
              element={<TechnicalAnalysis />}
            />
            <Route exact path={`/:id/tools`} element={<Tools />} />
          </Routes>
        </div>
      {/* <FloatingWhatsApp
        accountName="BritishFX Customer Support"
        phoneNumber="447405844662"
        notificationSound={true}
      /> */}
      </Router>
    </div>
  );
}

export default App;
