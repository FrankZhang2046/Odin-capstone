const express = require('express');
const app = express();
const cors = require('cors');
const pocketAuthRoutes = require('./routes/pocketAuthN');
const feedlyRoutes = require('./routes/feedlyRoutes');
const webScrapeRoutes = require('./routes/scrape');

const mongoose = require('mongoose');

const password = 'idlvd4gs';

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://frankzhang:${password}@articles-d7cft.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

app.use('/', pocketAuthRoutes);
app.use('/feedly', feedlyRoutes);
app.use('/webscrape', webScrapeRoutes);
app.listen(8080, console.log(`server successfully set up.`));

