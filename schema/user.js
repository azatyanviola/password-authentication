import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: true,
    },
    lastname: {
        type: String,
        required: true,
      },
      
      region: {
        type: String
      },

      adress: {
        type:String,
        required:false
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: Number,
        required: true,
      }
      
  });
  
  const User = mongoose.model('User', userSchema);
  
  export default User;