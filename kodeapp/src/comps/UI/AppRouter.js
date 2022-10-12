// import './Router.css';
// import React, {useState} from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Maincontent from "../maincontent/Maincontent";

const AppRouter = () => {

  return (
    <Routes>
      <Route path="/all" element={<Maincontent dep={"all"}/>} />
      <Route path="/designers" element={<Maincontent dep={"designers"}/>} />
      <Route path="/analysts" element={<Maincontent dep={"analysts"}/>} />
      <Route path="/managers" element={<Maincontent dep={"managers"}/>} />
      <Route path="/iOS" element={<Maincontent dep={"iOS"}/>} />
      <Route path="/android" element={<Maincontent dep={"android"}/>} />

      {/* <Route path="*" element={<Main />} /> */}
      <Route path="*" element={<Navigate to="/all" replace />} />
    </Routes>
  );
};

export default AppRouter;
