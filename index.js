'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';



import router from './routes/main.js';
import User from './schema/user.js';

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.use(session({
   secret:process.env.SESSION_SECRET,
   resave:false,
   saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal.Strategy({
   usernameField: "email"
 }, async (email, password, done) => {
   const user = User.find((user) => user.email === email);
 
   if(user === undefined) {
     return done(null, null, {message: "Incorrect email"});
   }
 
   if(user.password === password) {
     return done(null, user);
   }
 
   done(null, null, {message: "Incorrect password"});
 }));

app.use('/', router);

app.use(express.static('form'));

app.use(express.urlencoded({extended: true}));

( async () =>{
   await mongoose.connect('mongodb://localhost:27017/form');
  })();

 app.listen(process.env.PORT, () => console.log('Server is running'));