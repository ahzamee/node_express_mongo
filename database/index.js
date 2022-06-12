const mongoose = require("mongoose");

const connectMongoAtlas = async () => {
  const DB = process.env.DATABASE_ATLAS.replace(
    "<password>",
    process.env.DATABASE_ATLAS_PASSWORD
  );
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection Succesful!");
    });

};

module.exports = {
  connectMongoAtlas,
};
