import { useState } from "react";
//layout
import Footer from "./Components/layout/Footer";
import Home from "./Components/layout/Home";
import Navbar from "./Components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Footer />
    </>
  );
}

export default App;
