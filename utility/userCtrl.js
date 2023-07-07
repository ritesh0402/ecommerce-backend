const User = require('../db/models/userModel')

const createUser = async (req, res) => {
   const { email } = req.body;
   const findUser = await User.findOne({ email });
   if (!findUser) {
      const newUser = await User.create(req.body)
      //storing user id in session data
      req.session.user_id = newUser._id;
      res.json({
         msg: "User Registered Successfully!!",
         success: true,
      });

   } else {
      res.json({
         msg: "User Already Exists!!",
         success: false,
      });

   }
}

module.exports = createUser;