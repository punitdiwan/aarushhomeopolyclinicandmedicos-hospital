import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contactus from "./component/Contactus";
import Doctor from "./component/Doctor";
import Eyesight from "./component/Eyesight";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Headbrain from "./component/Headbrain";
import Heart from "./component/Heart";
import Home from "./component/Home";
import Liver from "./component/Liver";
import Mouthtt from "./component/Mouthtt";
import Navbar from "./component/Navbar";
import Respiration from "./component/Respiration";
import Treatment from "./component/Treatment";
import Urinary from "./component/Urinary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutdoctor" element={<Doctor/>}/>
        <Route path="/nervoussystem" element={<Headbrain/>}/>
        <Route path="/respiration" element={<Respiration/>}/>
        <Route path="/urinary" element={<Urinary/>}/>
        <Route path="/heart" element={<Heart/>}/>
        <Route path="/liver" element={ <Liver/>}/>
        <Route path="/eyesight" element={<Eyesight/> }/>
        <Route path="/mouth" element={<Mouthtt/>}/>
        <Route path="/contactus" element={<Contactus/> }/>
        <Route path="/treatment" element={<Treatment/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        
        
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
