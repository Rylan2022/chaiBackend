require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/media', (req, res) => {
    res.send('Rakeshmolla')
})
app.get('/login', (req, res) => {
    res.send('<h1>Please login chai or code#</h1>')
})

app.get('/youtub', (req, res) => {
    res.send('<h2>Chai peo gaa@</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
