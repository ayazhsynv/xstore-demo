const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API is running!");
});
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});
app.post("/api/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.json({ status: "success", data });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
module.exports = app;
