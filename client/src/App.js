import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  AuthPage,
  Dashboard,
  Error404,
  DisclaimerInfo,
  MachinePage,
  OnGoingSessionStat,
  StatisticsPage,
  HowToUsePage,
  FAQsPage,
  SessionStatPage,
} from "./components/routes/RouteComponents";
import AppRoute from "./components/routes/AppRoute";
import UpperNav from "./components/sidePages/navBar/UpperNav";



export default function App() {
  return (
    <>
      <UpperNav />
      <Routes>
        <Route path="/" element={<AppRoute Component={HomePage} />} />

        <Route path="/login" element={<AppRoute Component={AuthPage} />} />

        <Route path="/home">
          <Route index element={<AppRoute Component={Dashboard} />} />
          <Route path="disclaimer" element={<AppRoute Component={DisclaimerInfo} />} />
          <Route path="machineHome" element={<AppRoute Component={MachinePage} />} />
          <Route path="stats" element={<AppRoute Component={OnGoingSessionStat} />} />
        </Route>

        <Route path="/stats">
          <Route index element={<AppRoute Component={StatisticsPage} />} />
          <Route path=":id" element={<AppRoute Component={SessionStatPage} />} />
        </Route>

        <Route path="/howToUse" element={<AppRoute Component={HowToUsePage} />} />

        <Route path="/faq" element={<AppRoute Component={FAQsPage} />} />

        <Route path="*" element={<AppRoute Component={Error404} />} />

      </Routes>
    </>
  );
}
