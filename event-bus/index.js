const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(events);

  await axios.post("http://localhost:4003/events", event);
  await axios.post("http://localhost:4002/events", event);
  await axios.post("http://localhost:4001/events", event);
  await axios.post("http://localhost:7000/events", event);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
