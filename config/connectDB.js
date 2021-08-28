const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    let result = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(`can not connect ${error}`);
  }
};

module.exports = connectDB;
