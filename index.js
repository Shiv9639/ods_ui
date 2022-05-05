import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.get("/api", (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
    res.json({"users": ["UserOne","usertwo","userthree"]})
})

app.listen(5000, ()=> {console.log("Server started on port 5000")})