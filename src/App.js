import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import Breezer from "./components/Breezer";
import Flavours from "./components/Flavours";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breezer />
      <Flavours />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
