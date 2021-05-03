const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  cors = require("cors");

//Database
mongoose
  // .connect("mongodb://localhost/food-studies") <---- Despliegue local
  .connect(
    "mongodb+srv://root:Food-Studies-Api@cluster0.ldjqu.mongodb.net/test"
  )
  .then((db) => console.log("DB is connected"))
  .catch((e) => console.error(e));

//Settings
app.set("port", process.env.PORT || 8000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/user", cors(), require("./routes/user"));
app.use("/api/university", require("./routes/university"));

app.listen(app.get("port"), () => {
  console.log(`server working on http://localhost:${app.get("port")}`);
});
