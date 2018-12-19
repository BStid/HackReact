require("dotenv").config();
const express = require("express");
const app = express();
const { SESSION_SECRET: secret, CONNECTION_STRING, PORT } = process.env;
const port = PORT || 3100;
const session = require("express-session");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const authCtrl = require("./controllers/authCtrl");
const masterRoutes = require("./masterRoutes");
const AWS = require("aws-sdk");
const path = require("path");

app.use(express.static(`${__dirname}/../build/`));

AWS.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  asscessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: "us-east-2"
});

app.use(
  "/s3",
  require("react-s3-uploader/s3router")({
    bucket: "hackreact",
    region: "us-east-2",
    headers: { "Access-Control_Allow-Origin": "*" },
    ACL: "public-read"
  })
);

app.use(json());
app.use(cors());

app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1209600000 // two weeks
    }
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

authCtrl(app);
masterRoutes(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`Server now running on port ${port}`));
