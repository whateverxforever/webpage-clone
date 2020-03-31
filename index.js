const express = require('express');
const PORT = process.env.PORT || 5000;
const path = require('path');

const app = express();

app.listen(PORT, () => {
    console.log('app started');
})

app.use('/', express.static(path.join(__dirname, 'public')))