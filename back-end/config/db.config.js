const mongoose = require('mongoose')

// const DB_URI = 'mongodb://root:roo@localhost:27017' // with docker setup
const DB_URI = 'mongodb://localhost:27017'  // windows

// establishing a database connection
mongoose.connect(DB_URI, {
    dbName: 'stord',
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

module.exports = connection