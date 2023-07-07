const User = require('../db/models/userModel')

const checkCred = async (req, res) => {
   const { username, password } = req.body;
   const user = await User.findAndAuthenticate(username, password);
   if (user) {
      req.session.user_id = user._id;
      res.status(200).send("Login Successful!!!")
   } else {
      res.status(401).send("Login Unsuccessful!!! Incorrect Username or Password")
   }
}

module.exports = checkCred;