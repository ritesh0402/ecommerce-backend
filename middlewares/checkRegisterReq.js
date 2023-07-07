const Joi = require('joi');

const joiSchema = Joi.object({
   firstname: Joi.string()
      .min(3)
      .max(30)
      .required(),

   lastname: Joi.string()
      .min(3)
      .max(30)
      .required(),

   username: Joi.string()
      .min(3)
      .max(30)
      .required(),

   email: Joi.string()
      .email()
      .min(3)
      .max(30)
      .required(),

   password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),

   mobile: Joi.string()
      .length(10)
      .required(),
})

const checkRegisterReq = (req, res, next) => {
   const { error } = joiSchema.validate(req.body)
   if (error) {
      res.status(400).send(error.details)
      // next(err)
   } else {
      next();
   }
}

module.exports = checkRegisterReq;