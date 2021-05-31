let path = require("path");
module.export = function(app) {
    app.get("", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/.html"));
    });
    app.get("", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/.html"));
    });
    app.get("", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/.html"));
    });
}