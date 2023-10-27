
import './App.css'
import {Navbar} from './Component/Navbar.jsx'
import {Home} from "./Pages/Home.jsx";
import {Events} from "./Pages/Events.jsx";
import {AboutUs} from "./Pages/AboutUs.jsx";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {Footer} from "./Component/Footer.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact index element = {<Home/>}  />
                <Route exact path='/' element = {<Home/>}  />
                <Route exact path='/Events' element = {<Events/>} />
                <Route exact path='/AboutUs' element = {<AboutUs/>} />
                <Route exact path='*' element = {<AboutUs/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
