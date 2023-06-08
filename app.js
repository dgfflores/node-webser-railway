require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Daniel Gutierrez',
        titulo: 'Curso de Node'
    });
});


app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'Daniel Gutierrez',
        titulo: 'Curso de Node'
    });

});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Daniel Gutierrez',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    // res.send('404 | page not found');
    res.sendFile(__dirname + '/public/404.html');

});
  

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})