const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index');
});


module.exports = router;
