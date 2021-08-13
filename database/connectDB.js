const mongoose = require("mongoose");
const settings = require("../settings")

async function connectToDb() {
    try {
        await mongoose.connect(settings.databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectToDb;