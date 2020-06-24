const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

/**
 * MIDDLEWARE: functions that execute when routes are being hit. eg. authentication
 */
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
// everytime posts is hit, postsRoute will run 
app.use('/posts', postsRoute);

/**
 * ROUTES: now we have the ability to create routes 
 */

app.get('/', (req, res) => {
    res.send('We are home Aleko');
});
app.get('/posts', (req, res) => {
    res.send('We are on posts Aleko');
});

/**
 * CONNECT TO DB
 */
mongoose.connect(
    process.env.DB_CONNECTION, 
    // 'mongodb+srv://aleko:qwerty123@cluster0-tlfqs.mongodb.net/rest?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    // () => console.log(mongoose.connection.readyState)
    () => console.log('connected to DB!')
    // (err) => {
    //     console.log(`app.js - 37 - variable`, err);
    // }
);

// LISTEN
 app.listen(7777);
