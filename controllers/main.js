'use strict';

import User from '../schema/user.js';
import path from 'path';
//import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';



    function getUsers(req, res){
       res.sendFile(path.resolve('form/index.html'));
    }
    
    function getUsersLogin(req, res){
       res.sendFile(path.resolve('form/login.html'));
     } 


     
   function getUsersHome(req, res){
      res.sendFile(path.resolve('form/home.html'));
    } 
 

  async function addUser(req, res){
    const userBody = req.body;

      const data = await User.create(userBody);
      console.log(userBody);
      return res
            . redirect('/login');
            
  }

  function logout(req, res)  {
    res.redirect('/login');
  }


  




 
  export default { addUser, getUsers,logout, getUsersLogin, getUsersHome};