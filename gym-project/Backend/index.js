const express = require('express');
require("dotenv").config()

const db = require('./config/db.config');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", require("./routes/gym.route"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});