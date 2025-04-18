import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Team, Services, Jobs, Referral, Providers } from "./pages";

const App = () => {
  return (
    <BrowserRouter basename="/bridge-medical">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="referral" element={<Referral />} />
        <Route path="providers" element={<Providers />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
