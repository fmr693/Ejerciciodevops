const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "list of books"});
});

module.exports = router;

