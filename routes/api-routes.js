const db = require("../models");

//routes

module.exports = (app) => {


    // main page
    app.get("/api/workouts", (req, res) => {
        res.send(index.html);
    });
  
  
  };