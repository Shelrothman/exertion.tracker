const express = require("express");
const Workout = require("../models/workout.js");

//routes

module.exports = (app) => {


    // main page and last workout
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });


      // creating a workout
      app.post("/api/workouts", (req, res) => {
        Workout.create({})
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });





    
};