
const bcrypt = require("bcryptjs");
const { Users } = require("../../models");

const nodemailer = require("nodemailer");

/**
 * Trasportatore Nodemailer configurato per utilizzare il servizio Gmail per l'invio delle email.
 * 
 * @constant
 * @type {import('nodemailer').Transporter}
 * @property {Object} auth - Oggetto di autenticazione per Gmail.
 * @property {string} auth.user - Indirizzo Gmail utilizzato per inviare le email.
 * @property {string} auth.pass - Password specifica per l'app di Gmail.
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rms072296@gmail.com",
    pass: "kcjm pisb jzqk oprp ",
  },
});

/**
 * Aggiunge un nuovo utente al database con una password generata casualmente.
 * La password viene hashata prima di essere salvata.
 * Invia una email al nuovo utente con la password generata.
 *
 * @async
 * @function
 * @param {import('express').Request} req - Oggetto request di Express contenente i dati dell'utente nel body.
 * @param {import('express').Response} res - Oggetto response di Express usato per inviare la risposta.
 * @returns {Promise<void>} Risponde con un messaggio di successo o fallimento.
 */
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

/**
 * Recupera le informazioni dell'utente dal token di autenticazione.
 *
 * @async
 * @function
 * @param {import('express').Request} req - Oggetto request di Express contenente l'utente autenticato.
 * @param {import('express').Response} res - Oggetto response di Express usato per inviare i dati dell'utente.
 * @returns {Promise<void>} Risponde con le informazioni dell'utente.
 */
exports.getUserFromToken = async (req, res) => {
  res.json(req.user);
};
