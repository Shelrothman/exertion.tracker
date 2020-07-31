const db = require("../models");
const app = require("express").Router();

//routes

module.exports = (app) => {


    // main page and last workout
    app.get("/", (req, res) => {
        res.sendFile(_dirnam, "./index.html");
    });
  
    // route to page for adding/updating workouts
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "./exercise.html"));
      });


    // // route to add an exercise
    // app.put("/api/workouts/:id", (req, res) => {
    //     db.Workout.update(  //change to exercise?
    //       req.body,
    //       {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then((dbWorkout) => {
    //       res.json(dbWorkout);
    //     });
    //   });


      //route to add a workout
      app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
          res.send(exercise.html);
        });
      });
  
  };