import { Home } from './pages/Home/Home';
import {Notizie} from './pages/Notizie/Notizie';
import { Bandi } from './pages/Bandi/Bandi';
import { FAQ } from './pages/FAQ/FAQ';
import { Regolamento } from './pages/Regolamento/Regolamento';
import { Gallery } from './pages/Gallery/Gallery';

import { Layout } from './Layout';

import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'



function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path="/" element ={<Home/>} />  
          <Route path="/notizie" element ={<Notizie/>} /> 
          <Route path="/bandi" element ={<Bandi/>} /> 
          <Route path="/FAQ" element ={<FAQ/>} /> 
          <Route path="/regolamento" element ={<Regolamento/>} /> 
          <Route path="/gallery" element ={<Gallery/>} />

        </Route> 
      </Routes>
    </Router>
    </>
  )
}


export default App
