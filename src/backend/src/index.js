const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  cors = require("cors");

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
app.use(cors());

//Routes
app.use("/user", cors(), require("./routes/user"));

//Server
// -------------------------- This is for get an Ip
// let address,
//   ifaces = require("os").networkInterfaces();

// Object.keys(ifaces).forEach((dev) => {
//   ifaces[dev].filter((details) => {
//     if (details.family === "IPv4" && details.internal === false) {
//       address = details.address;
//     }
//   });
// });
// app.listen(app.get("port"), address, () => {
//   console.log(`server working on http://${address}:${app.get("port")}`);
// });

app.listen(app.get("port"), () => {
  console.log(`server working on http://localhost:${app.get("port")}`);
});
