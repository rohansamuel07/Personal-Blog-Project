import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
    },
    profilePricture:{
      type: String,
      default: 'https://th.bing.com/th/id/OIP.SxuyKL-Ca-_bXp1TC4c4-gHaF3?rs=1&pid=ImgDetMain'
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;