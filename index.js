const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/leprechaun.html");
})

app.get("/leprechaun", (req, res) => {
  res.sendFile(__dirname + "/public/leprechaun.html");
})

app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
