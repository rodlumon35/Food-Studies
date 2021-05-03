const express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  bodyParser = require("body-parser").json(),
  bcrypt = require("bcrypt"),
  saltRounds = 10;

router.get("/", async (req, res) => {
  const _user = await User.find();
  res.json(_user);
});

router.get("/test", (req, res) => {
  res.send("hello world");
});

router.get("/profile/:id", async (req, res) => {
  const _user = await User.find({ _id: req.params.id });
  res.json(_user);
});

router.put("/profile/:id", async (req, res) => {
  const oldUser = await User.find({ _id: req.params.id });
  await User.findByIdAndUpdate(req.params.id, req.body);
  const newUser = await User.find({ _id: req.params.id });

  res.json({
    status: "OK",
    message: "user profile updated",
    data: [
      {
        old: oldUser,
        new: newUser,
      },
    ],
  });
});

router.post("/register", bodyParser, async (req, res) => {
  const _user = new User(req.body);
  if (_user.fullName && _user.username && _user.password) {
    User.findOne({ username: _user.username }).exec((err, user) => {
      if (user) {
        res.json({ status: "ERROR", message: "Username us registrered" });
      } else {
        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(_user.password, saltRounds, async (err, hash) => {
            _user.password = hash;
            await _user.save();
            res.json({
              status: "OK",
              message: "user registered",
              data: _user,
            });
          });
        });
      }
    });
  } else {
    res.json({ status: "ERROR", message: "Missing data" });
  }
});

router.post("/login", (req, res) => {
  const _user = req.body;
  if (_user.username && _user.password) {
    User.findOne({ username: _user.username }).exec((err, user) => {
      if (user) {
        bcrypt.compare(_user.password, user.password, function (err, isMatch) {
          if (isMatch) {
            _user._id = user._id;
            res.json({
              status: "OK",
              message: "user logged",
              data: _user,
            });
          } else {
            res.json({
              status: "ERROR",
              message: "invalid password",
            });
          }
        });
      } else {
        res.json({ status: "ERROR", message: "Missing data" });
      }
    });
  } else {
    res.json({ status: "ERROR", message: "Missing data" });
  }
});

router.get("/follow/:userLogged/to/:userFollowed", async (req, res) => {
  const userLogged = await User.findOne({ _id: req.params.userLogged }),
    userFollowed = await User.findOne({ _id: req.params.userFollowed });

  if (
    !userLogged.following.includes(userFollowed._id) &&
    userLogged._id != userFollowed._id
  ) {
    await User.updateOne(
      { _id: userLogged._id },
      { $push: { following: userFollowed._id } }
    );
    await User.updateOne(
      { _id: userFollowed._id },
      { $push: { followers: userLogged._id } }
    );
    res.send(
      `user ${userLogged.username} has followed to ${userFollowed.username}`
    );
  } else {
    res.send(
      `user ${userLogged.username} has already followed to ${userFollowed.username}`
    );
  }
});
module.exports = router;
