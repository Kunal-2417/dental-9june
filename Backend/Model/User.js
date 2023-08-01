const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,

      unique: true,
    },
    userId: {
      type: String,
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
    fromPhone:{
      type: Boolean,
      default: false,
    },
    loginCount:{
      type:Number,
      default:1,
    },
    loginDate: {
      type: Array,
      date:  new Date(),
    }
  },
  { timestamps: true }
);

module.exports={User: mongoose.model("User", UserSchema)};
