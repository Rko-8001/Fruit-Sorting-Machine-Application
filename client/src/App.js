import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage } from "./components/routes/RouteComponents";
import AppRoute from "./components/routes/AppRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppRoute Component={HomePage} />} />
        <Route path="/login" element={<AppRoute Component={AuthPage} />} />
      </Routes>
    </>
  );
}
