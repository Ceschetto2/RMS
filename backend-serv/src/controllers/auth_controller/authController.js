const { Users } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  console.log("auth in corso...");
  try {
    const user = await Users.findOne({
      where: { username: req.body.username },
    });
    //console.log(user);
    if (user !== null) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        //console.log(user.dataValues);
        const token = jwt.sign(user.dataValues, "chiave_segretissima", {
          expiresIn: "1h",
        });
        username = user.dataValues.username;
        const refreshToken = jwt.sign({username}, "chiave_segretissima2", {
          expiresIn: "7d",
        });

        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          sameSite: "None",
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        });

        return res.status(200).json(token);
      }
      return res.status(401).json("Password Errata");

    }
    return res.status(401).json("Utente non trovato");

  } catch (err) {
    return res.status(401).json("Errore"+ err);
  }
};

//Middleware per l'autenticazione (veriica la validità del token nell'header della richesta prima
//dell'esecuzione del metodo)
exports.tokenValidation = (req, res, next) => {
  //console.log(req.headers);
  const token = req.headers["authorization"];
  //console.log(token);
  if (token === null) return res.status(401).json("Token non valido");
  jwt.verify(token, "chiave_segretissima", (err, user) => {
    if (err)
      return res
        .status(403)
        .json("Richiesta rifiutata, permessi non sufficenti " + err);
    req.user = user;
    next();
  });
};
