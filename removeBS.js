const fs = require('fs');

const content = require('./article');

const newContent = content.replace(/\\/g,'');

fs.writeFile('newArticle.js', newContent, (err) => {
    if (err) throw err;
})