const express = require('express');
const app = express();
const mongoose = require('mongoose');

/**
 * MIDDLEWARE: functions that execute when routes are being hit. eg. authentication
 */
// app.use('/posts', () => {
//     console.log(`app.js - 8 - this is a middleware running`);
// });

/**
 * ROUTES: now we have the ability to create routes 
 */

app.get('/', (req, res) => {
    res.send('We are home Aleko');
});
app.get('/posts', (req, res) => {
    res.send('We are posts Aleko');
});

/**
 * CONNECT TO DB
 */
mongoose.connect('mongodb+srv://aleko:<qwerty123>@cluster0-tlfqs.mongodb.net/<rest>?retryWrites=true&w=majority', () => {
    console.log(`app.js - 27 - connected to DB!`);
})

// LISTEN
 app.listen(7777);
