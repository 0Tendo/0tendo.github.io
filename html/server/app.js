const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    let logMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n---\n`;

    fs.appendFile('contact_log.txt', logMessage, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        console.log('Saved!');
        res.send('success');
    });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});