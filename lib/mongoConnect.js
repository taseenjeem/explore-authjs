import mongoose from "mongoose";

const mongoConnect = async () => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_URI));
    return conn;
  } catch (err) {
    console.error(err);
  }
};

export default mongoConnect;
