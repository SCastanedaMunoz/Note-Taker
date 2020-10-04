const fs = require("fs");
const util = require("util");
const path = require("path");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {
    
    // Read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", function(req, res){
        readFileAsync(path.join(__dirname, "../db/db.json"), "utf8")
        .then(data => {
            res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", function(req, res){
        console.log(req.body);
    });

    app.delete('/api/notes/:id', function (req, res) {
        console.log(req.params.id);
        res.send('Got a DELETE request at /user');
    });
};