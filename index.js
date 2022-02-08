const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://daehwan:1234@youtubeclone.rskjl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`listening ${port}`));
