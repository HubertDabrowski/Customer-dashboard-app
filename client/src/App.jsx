import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage"
import AddCustomers from "./AddCustomers"
import ShowCustomers from "./ShowCustomers"
import EditCustomers from "./EditCustomers"
import DeleteCustomers from "./DeleteCustomers"
import Navbar from './Navbar';
import index from "./index.css"

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<><Navbar/><ShowCustomers /></>} />
          <Route path="/add" element={<><Navbar/><AddCustomers /></>} />
          <Route path="/edit" element={<><Navbar/><EditCustomers /></>} />
          <Route path="/delete" element={<><Navbar/><DeleteCustomers /></>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
