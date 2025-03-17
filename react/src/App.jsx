import { Home } from "./pages/Home/Home";
import { Notizie } from "./pages/Notizie/Notizie";
import { Bandi } from "./pages/Bandi/Bandi";
import { FAQ } from "./pages/FAQ/FAQ";
import { Regolamento } from "./pages/Regolamento/Regolamento";
import { Gallery } from "./pages/Gallery/Gallery";

import { Layout } from "./Layout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


/*
Questa è l'interezza della nostra app. Sono contenute tutte le pagine presenti sotto forma di root.
Inoltre abbiamo l'elemento Layout che contiene elementi (componenti) che sono seppre presenti e quindi è
inutile renderizzarle ad ogni pagina.

Le componenti più importanti della pagina sono:
BrowserRouter (Router): Fornisce il contesto per la navigazione nel browser.
Routes: Contiene tutte le route dell'applicazione.
Route: Definisce una singola pagina con il relativo percorso (path).
Questi ci consentono di localizzare e navigare fra le varie pagine presenti. Le pagine vengono importate dalla cartella pages
e chiamate in base alla path specificata.
*/


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notizie" element={<Notizie />} />
          <Route path="/bandi" element={<Bandi />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/regolamento" element={<Regolamento />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
