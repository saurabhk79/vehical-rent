const express = require("express");
const cors = require("cors");

const PORT = 9872;
const app = express();

app.use(cors());

app.get("/", (req,res)=> {
    res.send("Hello")
})

app.listen(PORT, ()=> {
    console.log("Running on http://localhost:"+PORT)
})