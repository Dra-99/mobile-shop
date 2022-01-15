const mongoose = require("mongoose")
require("colors")

async function connect() {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB已连接: ${res.connection.host}`.green.underline);
    } catch (error) {
        console.log(`Error: ${error}`.red.underline);
        process.exit(1)
    }
}

module.exports = connect;