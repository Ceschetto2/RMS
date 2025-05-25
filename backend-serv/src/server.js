/* 
Il file server.js configura e avvia un server Express per gestire le richieste API.
- Utilizza il middleware express.json() per il parsing del corpo delle richieste in formato JSON.
- Configura il middleware CORS per consentire richieste provenienti dall'origine "http://localhost:5173".
- Importa e utilizza i router per diverse risorse:
  - /GalleryImages: gestisce le richieste relative alle immagini della galleria.
  - /Faq: gestisce le richieste relative alle domande frequenti.
  - /Notizie: gestisce le richieste relative alle notizie.
  - /Regolamento: gestisce le richieste relative al regolamento.
  - /Bandi: gestisce le richieste relative ai bandi.
- Sincronizza il database utilizzando Sequelize e avvia il server sulla porta 8080.
*/

const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5174"]
};

app.use(cors(corsOptions));

const db = require("./models");

const galleryImageRouter = require("./routes/GalleryImages_routes");
app.use("/GalleryImages", galleryImageRouter);
const faqRouter = require("./routes/FAQ_routes");
app.use("/Faq", faqRouter);
const notizieRouter = require("./routes/Notizie_routes");
app.use("/Notizie", notizieRouter);
const regolamentoRouter = require("./routes/Regolamento_routes");
app.use("/Regolamento", regolamentoRouter);
const bandiRouter = require("./routes/Bandi_route");
app.use("/Bandi", bandiRouter);
const authenticationRouter = require("./routes/Authentication_route");
app.use('/Authentication', authenticationRouter);
//this route must be authorized
const userRouter = require("./routes/Users_route");
app.use('/User', userRouter);


db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("server started on port 8080");
  });
});
