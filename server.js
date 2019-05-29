const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authN');
const Feedly = require('feedly');


app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());


const f = new Feedly({
    client_id: 'sandbox',
    client_secret: 'YamL84gadHERJNcQ',
    base: 'http://sandbox7.feedly.com',
    port: 8080
})

f.categories((error, category) => {
    console.log(category);
    
})

f.logout();

app.use('/', authRoutes)
app.listen(8888, console.log(`server successfully set up.`));

