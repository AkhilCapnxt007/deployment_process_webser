const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const _dirname = path.dirname("");
const buildPath = path.join(__dirname, "../client/build");

app.use(express.static(buildPath));


// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());



app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


app.get("/", (req, res) => {
  let myjsonObj = [
    {
      name: "akhil",
      age: 20,
      profession: "coding",
    },

    {
      name: "akhil",
      age: 20,
      profession: "coding",
    },
    {
      name: "akhil",
      age: 20,
      profession: "coding",
    },
    {
      name: "akhil",
      age: 20,
      profession: "coding",
    },
  ];
  res.status(200).send(myjsonObj);
});

app.listen(4000, () => {
  console.log("app listening successfull");
});
