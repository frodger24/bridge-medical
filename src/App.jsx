import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Home, Team, Services, Jobs, Referral, Providers } from "./pages";
=======
import { Home, Team, Services, Jobs } from "./pages";
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2

const App = () => {
  return (
    <BrowserRouter basename="/bridge-medical">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="jobs" element={<Jobs />} />
<<<<<<< HEAD
        <Route path="referral" element={<Referral />} />
        <Route path="providers" element={<Providers />} />
=======
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
