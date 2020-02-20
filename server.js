const express = require("express");

const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Uno", { useNewUrlParser: true });

require('./server/routes/routes')(app);

app.listen(8000, () => console.log("listening on port 8000"));