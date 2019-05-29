const express = require('express');
const app = express();
const cors = require('cors');
const pocketAuthRoutes = require('./routes/pocketAuthN');
const feedlyRoutes = require('./routes/feedlyRoutes');

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

app.use('/', pocketAuthRoutes);
app.use('/feedly', feedlyRoutes);
app.listen(8080, console.log(`server successfully set up.`));

