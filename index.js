const express = require('express');
const app = express();
app.listen(3000, () => console.log('working'))
app.set('view engine', 'ejs');
app.use(express.static("Public"))
app.get("/r", (req, res) => {
    let data = req.query.url
    const buff = Buffer.from(data, 'base64');
    const str = buff.toString('utf-8');
    res.redirect(str);
})
app.get("/s", (req, res) => {
    let data = req.query.url
    const buff = Buffer.from(data, 'utf-8');
    const base64 = buff.toString('base64');
    res.send('<p>' + base64 + '</p>');
})
app.use((req, res) => {
    res.status(404).render('404')
})