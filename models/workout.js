/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// specifying an empty array is equivolent to 'mixed' or '[]'
	// could choose to define the schema of each object in the exercisees array 
const WorkoutSchema = new Schema({
	day: {
		type: Date,
	},
	exercises: {
		type: []
	},
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// Resistance WOrkout Example
// {
//     day: new Date(new Date().setDate(new Date().getDate() - 10)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   }

// cardio workout example
// {
//     day: new Date(new Date().setDate(new Date().getDate() - 7)),
//     exercises: [
//       {
//         type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4
//       }
//     ]
//   }
