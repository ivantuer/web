const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 1234;

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});

app.get("/", (req, res) => {
  try {
    fs.readFile("text.txt", (err, data) => {
      if (err) throw err;

      res.send({ text: data.toString() });
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/", (req, res) => {
  try {
    console.log(req.body);

    fs.writeFile("text.txt", req.body.text, (err) => {
      if (err) throw err;
      res.send(req.body.text);
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
