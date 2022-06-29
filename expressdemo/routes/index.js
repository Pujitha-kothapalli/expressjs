// var express = require('express');
// var router = express.Router();
// var mysql=require('../database/db');


//  /* GET home page. */
// //  router.get('/', function(req, res, next) {
// //    //res.render('index', { title: 'Express' });

// //   //res.send("<h1 style='color:red'>Hello! This is express develope by Pujitha</h1>");
// //   res.sendFile(path.resolve("public/form.html"));
// //  });
 router.post('/formsubmit',function(req, res, next) {
  
   var output = '<table border = 1>'
     output += '<tr><td>'+_+'<td>'
    output +=  req.body[_] + '</td></tr>' 
   }
   output += '</table>'+
   res.send(output);
 });

// // router.get("/",(req,res)=>{
// //   res.render('index', { title:'Express java script code templete' })
// // });

// // router.get("/fbposts",(req,res)=>{
// //   var post = [
// //     {title:"HBD",message:"happy birthday day"},
// //     {title:"Casual",message:"Hello how are you"},
// //     {title:"Announcements",message:"Bahubali movie is releasing on"},
// //     {title:"Greetings",message:"Greetings of the day"},
// //     {title:"Events",message:"Half saree event"},
// //   ];
// //   res.render('index', { title:'Facebook posts',posts:post });
// // });
// router.get('/xjs', function(req, res, next) {
//   //    //res.render('index', { title: 'Express' });
  
//   //   //res.send("<h1 style='color:red'>Hello! This is express develope by Pujitha</h1>");
//      res.sendFile(path.resolve("public/frm.html"));
//     });
// router.post("/selectqry",(req,res)=>{
  
// var regno = req.body.regno;
// mysql.getConnection((err, connection) => {
//      if(err) throw err;
//     connection.query('select * from student where regno='+regno, (err, rows) => {
//         connection.release(); 
//         if(err) throw err;
//         res.render('datadisplay', {rows:rows,title:"student details"});
        
//         //res.send(rows);
//    });
// });

// });

// module.exports = router;
