require('dotenv').config();


const config = {
    mongoDb: {
        url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0fgn7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
}

module.exports = config;