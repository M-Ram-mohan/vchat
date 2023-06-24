const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require('./config/db.js');

dotenv.config();
connectDB();
const app = express();

app.get("/",(req,res) => {
    res.send("API is running Successfully");
    console.log("Inside the server = " + chats);
});

app.get("/api/chat",(req,res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req,res) => {
    const singleChat = chats.find((c) => c._id ===req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));