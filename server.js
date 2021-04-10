const express = require('express');
const app = express();
const PORT = 8080;

/** 
 * setting view engine
 * routes
 * using files in directories
 * displaying the landing page
 * listening to PORT
*/
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(__dirname+'/images'));
app.use(express.static(__dirname+'/styles'))
app.use(express.static(__dirname+'/public_js'))

app.get('/', (req, res) =>{
    res.render('index');
})

app.listen(PORT, () =>{
    console.log(`server is listening on ${PORT}`);
})