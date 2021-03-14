import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import bodyParser from 'body-parser'
import routes from './staff/routes/staffRoute.js' //importing route
import routeGroup from './group/routes/groupRoute.js'
dotenv.config()
let app = express()
let port = process.env.PORT || 6000

app.listen(port)

console.log('RESTful API server started on: ' + port)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// connect DB
db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('MySql Connected...')
  }
})

// Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE employees';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });

// // Create table
// app.get('/createstafftable', (req, res) => {
//     let sql = 'CREATE TABLE staff(id int AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), gender VARCHAR(255), phone VARCHAR(255), email VARCHAR(255), title VARCHAR(255), part VARCHAR(255),PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Posts table created...');
//     });
// });

// test
app.get('/get', (req, res) => {
  db.query('SELECT * FROM staff', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      res.send('Posts fetched...')
    }
  })
})

routes(app) //register
routeGroup(app)
