const express = require('express');
const ENV = require('dotenv');

const userRouter = require('./routes/user.router');
const booksRouter = require('./routes/books.router');
const circularRouter = require('./routes/circular.router');


ENV.config();

const app = express();
const cors = require('cors');
const port = process.env.port;

const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', userRouter);
app.use('/', booksRouter);
app.use('/', circularRouter);


app.get('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

app.listen(port, () => {
    console.log(`server run in here ${port}`)
})

