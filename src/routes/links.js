const { json } = require('express');
const express = require('express');
const router = express.Router();

const pool =require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req,res)=>{
    res.render('links/add');
});

router.post('/add', isLoggedIn, async(req,res)=>{
    const{Nombre,Apellido,Sexo,Edad,Lugarorigen,Religión,Ocupación,EstadoCivil,Escolaridad,Domicilio,Email,Tel,AcompañanteoResponsable,
        Relación,Quiencanaliza,Fechaclínica,Tipointerrogatorio,Motivo}= req.body;
    const newlink={
        Nombre,
        Apellido,
        Sexo,
        Edad,
        Lugarorigen,
        Religión,
        Ocupación,
        EstadoCivil,
        Escolaridad,
        Domicilio,
        Email,
        Tel,
        AcompañanteoResponsable,
        Relación,
        Quiencanaliza,
        Fechaclínica,
        Tipointerrogatorio,
        user_id:req.user.id,
        Motivo
    };
    await pool.query('INSERT INTO historial_clinico set ?',[newlink]);
    res.redirect('/links');
});
router.get('/', isLoggedIn, async(req,res)=>{
    const links =await pool.query('SELECT*FROM historial_clinico WHERE user_id=?',[req.user.id]);
    res.render('links/list',{links});
});

router.get('/evaluation', (req,res)=>{
    res.render('links/evaluation');
});

router.get('/list', (req,res)=>{
    res.render('links/list');
});

router.get('/edit1/:ID_paciente', isLoggedIn, async(req,res)=>{
    const{ID_paciente}=req.params;
    var links=await pool.query('SELECT*FROM historial_clinico WHERE ID_paciente=?',[ID_paciente]);
    var grade = {
        score: 9 
      };
      var Result = Object.assign(links[0],grade);
    res.render('links/edit1',{link:Result});
});

router.post('/edito', isLoggedIn, async(req,res)=>{
    var{data1,data2,data3}=req.body;
   data1=data3+"&"+data1;
    await pool.query("UPDATE hospital.historial_clinico SET Notas=? WHERE  ID_paciente=?;",[data1,data2]);
    var links=await pool.query('SELECT*FROM historial_clinico WHERE ID_paciente=?',[data2]);
    var grade = {
        score: 92  
      };
      var Result = Object.assign(links[0],grade);
    res.render('links/edit1',{link:Result});
});

router.post('/borro', isLoggedIn, async(req,res)=>{
    var{borrar,data2}=req.body;
    await pool.query("UPDATE hospital.historial_clinico SET Notas=? WHERE  ID_paciente=?;",[borrar,data2]);
    var links=await pool.query('SELECT*FROM historial_clinico WHERE ID_paciente=?',[data2]);
    var grade = {
        score: 92  
      };
      var Result = Object.assign(links[0],grade);
    res.render('links/edit1',{link:Result});
});

router.post('/Antecedentes', isLoggedIn, async(req,res)=>{
    var{nopato1,nopato,num}=req.body;
switch (nopato1) {
    case "Nopatologico":
        await pool.query("UPDATE hospital.historial_clinico SET Nopatologico=? WHERE  ID_paciente=?;",[nopato,num]);
      break;
    case "Patologico":
        await pool.query("UPDATE hospital.historial_clinico SET Patologico=? WHERE  ID_paciente=?;",[nopato,num]);
    break;
    case "Heredofamiliares":
        await pool.query("UPDATE hospital.historial_clinico SET Heredofamiliares=? WHERE  ID_paciente=?;",[nopato,num]);
    break;
    case "Familiar":
        await pool.query("UPDATE hospital.historial_clinico SET Familiar=? WHERE  ID_paciente=?;",[nopato,num]);
    break;
    case "Escolar":
        await pool.query("UPDATE hospital.historial_clinico SET Escolar=? WHERE  ID_paciente=?;",[nopato,num]);
    break;
    case "Sociocultural":
        await pool.query("UPDATE hospital.historial_clinico SET Sociocultural=? WHERE  ID_paciente=?;",[nopato,num]);
    break;
    case "Ocupacional":
        await pool.query("UPDATE hospital.historial_clinico SET Ocupacional=? WHERE  ID_paciente=?;",[nopato,num]);
    break;
    case "Personalidad":
        await pool.query("UPDATE hospital.historial_clinico SET Personalidad=? WHERE  ID_paciente=?;",[nopato,num]);
    break;

  }
    var links=await pool.query('SELECT*FROM historial_clinico WHERE ID_paciente=?',[num]);
    var grade = {
        score: 9  
      };
      var Result = Object.assign(links[0],grade);
    res.render('links/edit1',{link:Result});
});






router.get('/edit1', isLoggedIn, (req,res)=>{
    res.render('links/edit1');
});


router.get('/singin', (req,res)=>{
    res.render('singin/singin');
});



module.exports =router;


