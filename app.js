const express = require('express');
const app = express();
const connectDB = require('./db/connectDB');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const logoutRoute = require('./routes/logoutRoute');
const bodyParser = require('body-parser');
const session = require('express-session');
const sessionOpt = require('./utility/sessionOpt')

if (process.env.NODE_ENV !== "production") {
   require('dotenv').config();
}
const PORT = process.env.PORT || 3000;

connectDB();

app.use(session(sessionOpt));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/logout', logoutRoute)

app.get("/", (req, res) => {
   res.send("Home route");
})

// error handling
app.use((err, req, res, next) => {
   const { status, message } = err;
   res.status(status).send(message);
})


app.listen(PORT, (err) => {
   if (err) {
      console.log(`Server ecountered an error: ${err}!!!`)
   } else {
      console.log(`Server is running at port ${PORT}!!!`)
   }
});