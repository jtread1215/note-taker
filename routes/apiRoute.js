const noteEntry = require("../")

module.exports = (app) => {
    app.get("./notes.html", (req, res) => res.json(noteEntry));

    app.post("*", (req, res) => {
        let id= noteEntry.length + 1;
        req.body.id = parseInt(id);
        noteEntry.push(req.body);
        res.json(true);
    })

    app.delete("", (req, res) => {
        let entry = noteEntry.find(({id}) => id === JSON.parse(req.params.id));
        noteEntry.splice(noteEntry.indexOf(entry), 1);
        res.end();
    })
}