const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

const db = require("./models");

const galleryImageRouter = require("./routes/GalleryImages_routes");
app.use("/GalleryImages", galleryImageRouter);



db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("server started on port 8080");
  });
});
