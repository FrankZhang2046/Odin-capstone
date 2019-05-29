const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

app.listen(8080, console.log(`server successfully set up.`));