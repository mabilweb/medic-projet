const express = require('express');
const app =express();
const path =require('path');

//settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//middleawres
///routes
app.use(require('./routes/index'));
///static files
app.use(express.static(__dirname + '/public'));

///listeig the server
app.listen(app.get('port'), () =>{
    console.log('sirviendo  en :', app.get('port'));
});