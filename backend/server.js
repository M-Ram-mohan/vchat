const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require('./config/db.js');
const userRoutes = require('./routers/userRoutes.js');
const chatRoutes = require('./routers/chatRoutes.js');
const messageRoutes = require('./routers/messageRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("API is running Successfully");
    console.log("Inside the server = " + chats);
});

app.use('/api/user', userRoutes);
app.use("/api/chat",chatRoutes);
app.use('/api/message',messageRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));