import "./App.css";
// import About from './component/About';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // weather dark mode or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
}
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="about us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="enter text to analyise"  mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
