const mongoose = require("mongoose");
const uri = "TODO";

const mongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB!");
    const fetched_data = mongoose.connection.db.collection("favvacs");
    const data = await fetched_data.find({}).toArray();
    global.favbooks = data;
    console.log("Acquired data!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDB;
