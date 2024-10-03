// Declare dependencies/Variables

const express = require('express');
const app =express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

// connect to the DB
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

// check if DB connection works
db.connect((err) => {
//if no connection
if (err)return console.log('Error Connecting to the mysql db');
//if connected
console.log("connected to mysql successfully as id:",db.threadId )

// // GET METHOD
// app.set('view engine', 'ejs');
// app.set('views',__dirname +'/views');
// app.get('/data',(req,res)=> {
//     //Question 1:Retrieve all patients
//     db.query('SELECT*FROM patients', (err,results)=>{
//         if(err){
//             console.error(err);
//             res.status(500).send('Error Retrieving data');
//         }
//         else{
//             //display the records to the browser
//             res.render('data',{results:results});
//         }

//     });
// });

// app.set('view engine', 'ejs');
// app.set('views',__dirname +'/views');
// app.get('/data',(req,res)=> {
//     //Question 2:Retrieve all providers
//     db.query('SELECT*FROM providers', (err,results)=>{
//         if(err){
//             console.error(err);
//             res.status(500).send('Error Retrieving data');
//         }
//         else{
//             //display the records to the browser
//             res.render('data',{results:results});
//         }

//     });
// });

// app.set('view engine', 'ejs');
// app.set('views',__dirname +'/views');
// app.get('/data',(req,res)=> {
//     //Question 3:Retrieve all patients by First Name
//     db.query('SELECT*FROM patients', (err,results)=>{
//         if(err){
//             console.error(err);
//             res.status(500).send('Error Retrieving data');
//         }
//         else{
//             //display the records to the browser
//             res.render('data',{results:results});
//         }

//     });
// });

app.set('view engine', 'ejs');
app.set('views',__dirname +'/views');
app.get('/data',(req,res)=> {
    //Question 4:Retrieve all providers by their specialty
    db.query('SELECT*FROM providers', (err,results)=>{
        if(err){
            console.error(err);
            res.status(500).send('Error Retrieving data');
        }
        else{
            //display the records to the browser
            res.render('data',{results:results});
        }

    });
});

//listen to the server
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);

    //Send message to browser
    console.log('Sending message to browser...');
    app.get('/',(req,res)=>{
        res.send('Server started sucessfully! GO ON')
    })

});
});



    