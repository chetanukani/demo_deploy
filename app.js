const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World! Node' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
