const express  = require("express")
const router  = express.Router()
const {Users} = require("../models")
const bcrypt = require("bcryptjs")
router.post("/", async (req, res) => {
    const user = await Users.findOne( {where: {username: req.body.username }})
    console.log(user);
    res.json( (await bcrypt.compare(req.body.password, user.password))? 
        "tutto ok":        "niente ok"
    )
   

})


module.exports = router;