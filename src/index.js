const express = require('express');
const app =express();
const path =require('path');
const exphbs=require('express-handlebars');

//settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
//app.set('view engine', 'ejs');


//app.set('views',path.join(__dirname,'views'));
//app.engine('.hbs',exphbs({
//defaultLayout:'main',
//layoutsDir:path.join(app.get('views'),'layouts'),
//partialsDir:path.join(app.get('views'),'partials'),
//extname:'.hbs',
//helpers:require('./lib/handlebars')
//}));
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