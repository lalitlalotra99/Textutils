// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Newpage from './components/Newpage';



function App() {

   const [mode, setMode] = useState('light')
   const [alert,setAlert] = useState(null)

   const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
   }

   const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert("Dark Mode has been Enabled","success")

      document.title="Textutils - Dark Mode Enable"
      // setInterval(() => {
      //   document.title="Texutils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Textutils Now"
      // }, 1500);

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been Enabled","success")
      document.title ="Textutils - Light Mode Enable"
    }

   }

  
  return (
    <>
    
    {/* <Navbar  title="textutils" abouttext="About Text"/> */}
    {/* <Navbar /> */}
<Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

<Routes>
          <Route exact path="/about" element={<About/>}>About</Route>
          <Route exact path="/newpage" element={<Newpage/>}>About</Route>
         
          <Route exact path="/" element={<TextForm showalert={showalert}heading="Enter the text analyze"  mode={mode}/>}></Route>
          </Routes>
     
    
    </div>
    </Router>

    
  </>
  );
}

export default App;
