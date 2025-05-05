const bcrypt = require("bcryptjs");
const { Users } = require("../../models");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rms072296@gmail.com",
    pass: "kcjm pisb jzqk oprp ",
  },
});


exports.addNewUser = async (req, res) => {
  const psswd = Math.random().toString(36).slice(-8);
  const userData = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(psswd, salt);
    userData.password = hash;
    await Users.create(userData);
  } catch (err) {
    console.log(err);
    return res.json("Utente non inserito");
  }

  const info = transporter.sendMail({
    from: '"Associazione Vogatori Ostuni", rms072296@gmail.com',
    to: userData.mail,
    subject: "Test",
    text: "Ciao questa è la tua password " + psswd,
  });
  return res.json("Utente Inserito");
};

exports.getUserFromToken = async (req, res) => {
  res.json(req.user);
};
