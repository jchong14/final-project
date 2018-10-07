//this will hold things like location, bio, experience, education, social network links, etc.

const express = require("express");

const router = express.Router();

//@route GET api/profile/test
//@description Tests profile route
//@access public

router.get("/test", (req, res) => res.json({msg: "Profile Works" }));

module.exports = router;