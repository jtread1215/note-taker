const path = require("path");
const store = require("../db/store");
const router = require("express").Router();

    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

module.exports = router;
    