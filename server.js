require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => res.send('Backend Working...'));
app.use('/api/v1', require('./routes/v1'));

app.listen(PORT, console.log(`Server Started on PORT: ${PORT}`));
