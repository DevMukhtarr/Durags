const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'pug');//setting the view engine
app.set('views', './public/landing');//setting the page for landing
app.use(express.static(__dirname+'/public/images'));
app.use(express.static(__dirname+'/public/styles'))
app.use(express.static(__dirname+'/public/public_js'))

//displaying the home page
app.get('/', (req, res) =>{
    res.render('index');
})


//listening on port
app.listen(PORT, () =>{
    console.log(`server is listening on ${PORT}`);
})