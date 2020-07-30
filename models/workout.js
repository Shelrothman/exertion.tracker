/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	// CODE HERE
	username: {
		type: String,
		trim: true,
		required: "Create a username!",
	},
	password: {
		type: String,
		trim: true,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
		required: true,
    unique: true,
    validate: {
      validator: function(v){
          return this.model('User').findOne({ email: v }).then(user => !user)
      },
      message: props => `${props.value} is already used by another user`
  },
	},
	userCreated: {
		type: Date,
		default: Date.now,
	},
});

const Workout = mongoose.model("User", workoutSchema);

module.exports = Workout;
