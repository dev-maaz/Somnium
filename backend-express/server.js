
const express = require("express")
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");


const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://devmaaztariq:maazshehry123@first-cluster.y6a01hu.mongodb.net/?retryWrites=true&w=majority&appName=first-cluster");
      console.log('MongoDB connected...');
    } catch (err) {
      console.error('Database connection error:', err.message);
      process.exit(1);
    }
  };

  connectDB();


app.get("/" ,(req,res) => {

    console.log('here');
    // you can use res.download(server.js) to send a file to download when that page is accessed
    
    res.render("index",{text: "World"});

})

const userRouter = require('./routes/users');

app.use("/users", userRouter);

app.listen(3001);