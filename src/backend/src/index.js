const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  mongoose = require("mongoose");

//Database
mongoose
  .connect("mongodb://localhost/food-studies")
  .then((db) => console.log("DB is connected"))
  .catch((e) => console.error(e));

//Settings
app.set("port", process.env.PORT || 8000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/user", require("./routes/user"));

//Server
app.listen(app.get("port"), () => {
  console.log(`server working on http://localhost:${app.get("port")}`);
});
