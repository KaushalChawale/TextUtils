import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';


import React,{useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }

  }
  

  return (
    <>
    {/*  <Router> */}
    <Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my- 3'>

      {/* <Routes>
            <Route exact path="/about" element={<About/>}/> */}
             
            {/* <Route exact path="/" element={<TextForm heading = "Enter the text below: " mode={mode} showAlert={showAlert} />}/> */}
            <TextForm heading = "Enter the text below: " mode={mode} showAlert={showAlert} />
      {/* </Routes> */}

    </div> 

    {/* <div className="container my-3">
      <About/>
    </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
