const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

let isOpen = false;

app.post("/open-locker", (req, res) => {
  isOpen = true;
  res.json({ status: true });
});

app.post("/close-locker", (req, res) => {
  isOpen = false;
  res.json({ status: false });
});

app.get("/locker-status", (req, res) => {
  res.json({ status: isOpen });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server starting at port ${port}`);
});
