'use strict';

import express from 'express';
import controllers from '../controllers/main.js';
import passport from 'passport';
import passportLocal from 'passport-local';


const urlencodedParser = express.urlencoded({extended: true});


const router = express.Router();



router.get('/register', controllers.getUsers);
router.post('/register', urlencodedParser,  controllers.addUser);
router.get('/login', controllers.getUsersLogin);
router.get('/logout',controllers.logout);
router.get('/home', controllers.getUsersHome);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));

export default router;