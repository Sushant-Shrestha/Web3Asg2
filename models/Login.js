const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define a schema that maps to the structure of the data in MongoDB
const loginSchema = new mongoose.Schema({
    id:Number,
      details:{  
         firstname:String,
         lastname:String,
         city:String,
         country:String
      },
      picture: {
        large: String,
        thumbnail: String
      },   
      membership: {
         date_joined : String,
         last_update : String,
         likes: Number
      },
      email:String,
      password_bcrypt:String,
      apikey:String,
      favorites : []
});

loginSchema.generateHash = function (password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

loginSchema.methods.isValidPassword =  function(formPassword) {
    const user = this;
    const hash = user.password_bcrypt;
    //Hashes the password sent by the user for login and checks if the hashed password stored in the 
    //database matches the one sent. Returns true if it does else false.
    const compare = bcrypt.compareSync(formPassword, hash);
    return compare;
}

module.exports = mongoose.model('logins', loginSchema);