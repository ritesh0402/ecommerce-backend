if (process.env.NODE_ENV !== "production") {
   require('dotenv').config();
}

const MongoStore = require('connect-mongo')

const store = MongoStore.create({
   mongoUrl: process.env.MONGO_URI,
   touchAfter: 24 * 60 * 60,
   crypto: { secret: 'codeword' }
})

store.on("error", function (err) {
   console.log('store error')
   console.log(err)
})

const sessionOpt = {
   store,
   secret: 'codeword',
   resave: false,
   saveUninitialized: false,
   cookie: {
      expires: Date.now() + (1000 * 60 * 60 * 24),
      maxage: (1000 * 60 * 60 * 24),
      httpOnly: true,
   }
}

module.exports = sessionOpt;