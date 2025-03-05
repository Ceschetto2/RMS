import { Home } from './pages/Home/Home';
import {Notizie} from './pages/Notizie/Notizie';
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
        </Route> 
      </Routes>
    </Router>
    </>
  )
}


export default App
