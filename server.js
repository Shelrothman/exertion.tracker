const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const addApiRoutes = require("./routes/api-routes");
const addHtmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;


const app = express();



// middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// connecting to database in mongoose
// providing the or clause so it will work on Heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//routes set up
addApiRoutes(app)
addHtmlRoutes(app)



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
