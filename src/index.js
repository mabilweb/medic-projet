const express =require('express');
const morgan =require('morgan');
const exphbs=require('express-handlebars');
const path =require('path');

const app=express();


//settings
app.set('port',process.env.PORT ||4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
defaultLayout:'main',
layoutsDir:path.join(app.get('views'),'layouts'),
partialsDir:path.join(app.get('views'),'partials'),
extname:'.hbs',
helpers:require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//middlewares

//global varials
app.use(morgan('dev'));


//Routes
app.use(require('./routes'));

//Public
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'public')));


//statir server
app.listen(app.get('port'),()=>{
    console.log('server on pedro',app.get('port'));
});