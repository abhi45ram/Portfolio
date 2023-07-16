require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const port = 6002;


app.use(cors());
app.use(express.json());

app.use(router)

// app.get("/" , (req,res)=>{
//     res.status(200).json("Server Start")
// });

// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port,()=>{
    console.log("server start");
})