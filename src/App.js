import React from "react";
<<<<<<< HEAD


import ReactDOM from "react-dom/client";
=======
>>>>>>> 1c99cf720c7d4258f561e99b47b877e5807a788d
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
