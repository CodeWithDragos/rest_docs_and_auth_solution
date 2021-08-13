const mongoose = require("mongoose");

// TODO: Add your Mongo Url here
const mongoURL = "mongodb+srv://rest-user:rest-pass@cluster0.pmjzp.mongodb.net/rest-db?retryWrites=true&w=majority";

async function connectToDb() {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectToDb;