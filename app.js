const express = require('express');
const app = express();

// app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Server is running' });
})

export default app;