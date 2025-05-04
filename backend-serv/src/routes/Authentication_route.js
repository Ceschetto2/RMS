const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
router.post("/", async (req, res) => {
    let result = 'niente ok';
  try {
    const user = await Users.findOne({
      where: { username: req.body.username },
    });
    if (user !== null) {

    if(await bcrypt.compare(req.body.password, user.password))
    {
        result = "tutto ok"
    }
          
    }
  } catch (err) {
    console.log(err);
  }finally{
    res.json(result)
  }

});

module.exports = router;
