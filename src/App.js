import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // setMode('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor = 'black';
      showAlert("Enabled dark mode", "Success");
    }
    else {
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled light mode", "Success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textColor={textColor} />
      <Alert message={alert} />

      {/* <Routes> */}
      {/* <Route exact path="/about" element={ <About />} />
          <Route exact path="/" element={<div className={`container text-${textColor}`}>
              <TextForm heading="Enter text below to analyze" mode={mode} textColor={textColor} />
            </div>} /> */}
      <div className={`container text-${textColor}`}>
        <TextForm heading="Enter text below to analyze" mode={mode} textColor={textColor} />
      </div>
      {/* </Routes> */}

      {/* </Router> */}
    </>
  );
}

export default App;
