const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authN');

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

app.use('/', authRoutes)
app.listen(8080, console.log(`server successfully set up.`));

