const path = require("path");

module.exports = function(app) {
   
   // main start page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

//excercise page
app.get("/exercise",function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


// stats page
app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


}