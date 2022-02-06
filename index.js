const express = require('express');

const app = express();
app.listen(3000, () => console.log('working'))
app.set('view engine', 'ejs');
app.use(express.static("Public"))


app.get("/1", (req, res) => {
    res.redirect('https://www.google.com');
})
app.get("/r", (req, res) => {
    let data = req.query
    let buff = Buffer.from(data, 'base64');
    let text = buff.toString('ascii');
    res.send('<p>' + text + '</p>');
})
app.use((req, res) => {
    res.status(404).render('404')
})