import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Contact, Faq, Introdution, Login, Register, Cursojava, Cursoreact, Cursohtml, Cursojavascript, Cursotypescript, Cursopython} from "../screens";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introdution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cursojava" element={<Cursojava/>} />
        <Route path="/cursoreact" element={<Cursoreact/>} />
        <Route path="/cursohtml" element={<Cursohtml/>} />
        <Route path="/cursojavascript" element={<Cursojavascript/>} />
        <Route path="/cursotypescript" element={<Cursotypescript/>} />
        <Route path="/cursopython" element={<Cursopython/>} />
      </Routes>
    </Router>
  );
};


export default AppRoutes;
