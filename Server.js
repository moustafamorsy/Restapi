const express = require('express');
require('dotenv').config('./.env');
const mongoose = require("mongoose");
const app = express();
const port = process.env.Dev_Port ;

const allUsers = require("./commands/allUsers");
const addUser = require("./commands/addUser");
const updateByid = require("./commands/updateByid");
const removeByid = require("./commands/removeByid");

async function connectDb() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Mongodb connected");
    } catch (error) {
      console.log(error.message);
    }
  }    
   connectDb();
    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// print all the data in the collection
app.get('/', allUsers)

//  add new user to the collection 
app.post('/add', addUser)

//  update existing user on collection using his id
app.put('/update/:id', updateByid)

// delete  user from the collection using his id
app.delete('/delete/:id', removeByid)


app.listen(port, () => {
    console.log("running on" + port);
});




