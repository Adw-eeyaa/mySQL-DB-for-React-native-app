    const express = require("express");
    const app = express();
    require('dotenv').config();
    app.use(express.json());
    const mysql = require("mysql2");
    const pool = mysql.createPool({

        host:process.env.SQL_HOST,
        user:process.env.SQL_USER,
        password:process.env.SQL_PASSWORD,
        database:process.env.SQL_DATABASE
    });


    pool.query(`select * from loginInfo where username="Adwaith"`,(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            return console.log(result);
        }
    });

    app.post('/login',(req,res)=>{
        var username = req.body.username;
        var password = req.body.password;
        pool.query(`insert into loginInfo values("${username}","${password}")`,(err , result) =>{
            if(err){
                console.log(err);
            }
            else{
                return console.log({status:"ok"});
            }
        });
    })
    app.listen(6090,()=>{
        console.log("server listening on port 6090")
    });






