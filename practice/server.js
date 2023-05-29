
const express = require("express");

var mysql = require("mysql");
var cors=require('cors')

app = express();

app.use(express.json());
app.use(cors());


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password@123',
  database : 'student'
});
 
connection.connect();
app.get('/get',(req,res)=>{
   
    connection.query('select id ,Sname,Age,Gender,Phone from stud',function (error, results) {
      if (error) {
      console.log(error);
       }
      
     res.json(results)
      
      })
    });
   
   app.listen(3000, () => {
     console.log("listening port 3000");
   });