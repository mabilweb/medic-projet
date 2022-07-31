const express =require('express');
const exphbs=require('express-handlebars');
const morgan =require('morgan');
const path =require('path');
const hbs = require('hbs');
const app =express();

//settings
app.set('port',process.env.PORT || 5000);
//app.set('views',path.join(__dirname,'views'));
//app.set('view engine', 'ejs');
//app.set('view engine','.hbs');


app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
defaultLayout:'main',
//layoutsDir:path.join(app.get('views'),'layouts'),
//partialsDir:path.join(app.get('views'),'partials'),
extname:'.hbs'
//helpers:require('./lib/handlebars')
}));
app.set('view engine','.hbs');
//middleawres

///routes
app.use(require('./routes/index'));
///static files
app.use(express.static(__dirname + '/public'));

///listeig the server
app.listen(app.get('port'), () =>{
    console.log('sirviendo  en :', app.get('port'));
});