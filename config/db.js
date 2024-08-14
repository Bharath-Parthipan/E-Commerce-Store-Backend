const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL).then((con) => {
            console.log("MongoDB connected to host: " + con.connection.host);
        });
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1);
    }
};


module.exports = connectDatabase;
