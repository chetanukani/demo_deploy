const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World! Node' });
});

app.listen(process.env.PORT, () => {
    console.log('server is running on port 3000');
});
