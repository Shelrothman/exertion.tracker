/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// specifying an empty array is equivolent to 'mixed' or '[]'
	// could choose to define the schema of each object in the exercisees array 
const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now
	},
	exercises: {
		type: []
	},
});


//use virtual to set the duration to total them
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

