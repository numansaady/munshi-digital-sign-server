const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// USE middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Munshi Digital Sign Server is Running.')
});

app.listen(port, ()=> {
    console.log('Listening to port', port);
})