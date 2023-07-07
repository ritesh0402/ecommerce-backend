const mongoose = require('mongoose');
if (process.env.NODE_ENV !== "production") {
   require('dotenv').config();
}

const connectDB = () => {
   mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
         console.log("Connected to Database!!!");
      })
      .catch((e) => {
         console.log("Connection to database Failed!!!");
         console.log(e);
      })
}

mongoose.set('strictQuery', false);
module.exports = connectDB;