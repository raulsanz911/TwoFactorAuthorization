module.exports = {
    CODE_LIFETIME: 300,
    MAX_CODES_PER_PHONE: 3,
    MONGO_URI: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
};
