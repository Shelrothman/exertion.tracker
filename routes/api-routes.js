/** @format */

const express = require("express");
const Workout = require("../models/workout.js");

//routes

module.exports = (app) => {
	// main page and last workout
	app.get("/api/workouts", (req, res) => {
		Workout.find({})
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	// creating a workout
	app.post("/api/workouts", (req, res) => {
		Workout.create({})
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	//adding an excercise to a workout
	app.put("/api/workouts/:id", (req, res) => {
		Workout.findByIdAndUpdate(
			params.id,
			{ $push: { exercises: body } },
			{ new: true, runValidators: true }
		)
			.then((dbWorkout) => {
				res.json(dbWorkout);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
};
