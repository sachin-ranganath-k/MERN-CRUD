//Contains rules for the fields
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchemaRules = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phoneno: String,
});

autoIncrement.initialize(mongoose.connection);
userSchemaRules.plugin(autoIncrement.plugin, "user"); 
//user is a collection (table)

const User = mongoose.model("user", userSchemaRules);
//If data satisfied with rules, creates the user collection. Else not

export default User;
