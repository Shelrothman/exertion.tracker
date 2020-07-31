const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Workout = require("./models/workout");
const addApiRoutes = require("./routes/api-routes");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExertion", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//routes set up
addApiRoutes(app)


// app.post("/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/", (req, res) => {
// 	res.send(index.html);
// });

// app.get("/workout", (req, res) => {
// 	res.send(exercise.html);
// });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
