import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { TickerTape } from "react-ts-tradingview-widgets";
import Dashboard from "./components/Dashboard";
import TechnicalAnalysis from "./components/TechnicalAnalysis";
import EconomicCalendar from "./components/EconomicCalender";
import Tools from "./components/Tools";
import Deposit from "./components/Deposit";
import Withdraw from "./components/WIthdraw";
import Profile from "./components/Profile";
import Signin from "./components/Signin";

import { ValueContext } from "./Context";
import Withdrawal from "./components/transactions/Withdrawal";
import PromoDeposit from "./components/transactions/PromoDeposit";
import Deposite from "./components/transactions/Deposit";
import PromoEarning from "./components/transactions/PromoEarning";
import Referral from "./components/transactions/Referral";
import Profit from "./components/transactions/Profit";

function App() {
  const { signin } = useContext(ValueContext);
  return (
    <div className="App">
      {signin ? (
        <Router>
          <Sidebar />
          <div className="content">
            <TickerTape showSymbolLogo={false} />
            <Routes>
              <Route exact path={`/`} element={<Dashboard />} />
              <Route exact path={`/profile`} element={<Profile />} />
              <Route exact path={`/deposit`} element={<Deposit />} />
              <Route exact path={`/withdraw`} element={<Withdraw />} />
              <Route
                exact
                path={`/transactions/withdrawal`}
                element={<Withdrawal />}
              />
              <Route
                exact
                path={`/transactions/deposit`}
                element={<Deposite />}
              />
              <Route
                exact
                path={`/transactions/promo-deposit`}
                element={<PromoDeposit />}
              />
              <Route
                exact
                path={`/transactions/promo-earning`}
                element={<PromoEarning />}
              />
              <Route
                exact
                path={`/transactions/referral-earning`}
                element={<Referral />}
              />
              <Route exact path={`/transactions/profit`} element={<Profit />} />
              <Route
                exact
                path={`/economic-calendar`}
                element={<EconomicCalendar />}
              />
              <Route
                exact
                path={`/technical-analysis`}
                element={<TechnicalAnalysis />}
              />
              <Route exact path={`/tools`} element={<Tools />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <Signin />
      )}
    </div>
  );
}

export default App;
