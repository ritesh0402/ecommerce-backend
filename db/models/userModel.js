const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new schema({
   firstname: {
      type: String,
      required: true,
   },
   lastname: {
      type: String,
      required: true,
   },
   username: {
      type: String,
      required: true,
      unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   mobile: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   }
})


userSchema.pre('save', async function (next) {
   if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 12)
   }
   next()
})

userSchema.statics.findAndAuthenticate = async function (username, password) {
   const user = await this.findOne({ username });
   if (!user) {
      return false;
   }
   const isValid = await bcrypt.compare(password, user.password);
   return isValid ? user : false;
}


module.exports = mongoose.model('User', userSchema);