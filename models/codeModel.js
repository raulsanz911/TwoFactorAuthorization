const mongoose = require('mongoose');

let isConnected = false;

function initDb() {
    return mongoose.connect(MONGO_URI, { useNewUrlParser: true })
        .then(() => {
            isConnected = true;
            console.log("Connected to MongoDB Atlas using Mongoose!");
        })
        .catch(err => {
            throw err;
        });
}

function getDb() {
    if (!isConnected) {
        throw new Error("Db has not been initialized. Please call init first.");
    }
    return mongoose.connection;
}

module.exports = {
    initDb,
    getDb
};
