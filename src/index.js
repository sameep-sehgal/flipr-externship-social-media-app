Promise = require('bluebird');
const { port, env } = require('./config/vars');
const database = require('./config/database');
const app = require('./config/express');

// open database(mongodb atlas) connection
database.connect();

app.get('/',(req,res) => {
    res.send("Working")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})