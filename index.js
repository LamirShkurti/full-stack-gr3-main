const express = require('express')
require('dotenv').config()
const database = require('./database')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000
const userRouters = require('./routers/users')

// function test(req,res,next) {
//   console.log(req.body)
//   console.log('This is my middleware from index.js');
//   if(req.body.emri){
//     res.status(400).send('No!')
//   }
//   next()
// }

// app.use(test)

app.use('/api/users', userRouters)

// app.post('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/komunat', (req, res) => {
//   console.log(req.body)
//   const emri = req.body.emri;
//   const pershkrimi = req.body.pershkrimi;
//   console.log(emri, pershkrimi)
//   database.query(`INSERT INTO komunat (Emri, Pershkrimi) VALUES ('${req.body.emri}', '${pershkrimi}')`, (err, results) => {
//     if (err) throw err;
//     res.send(`Komuna ${emri} u insertua ne databaze`);
//   });
// });

// //        /komunat/2
// app.put('/komunat/:id', (req, res) => {
//   const id = req.params.id;
//   console.log(req.params);
//   const emri = req.body.Emri;
//   const pershkrimi = req.body.Pershkrimi;
//   database.query(`UPDATE komunat SET Emri = ?, Pershkrimi =? WHERE Id = ?`, [emri, pershkrimi, id], (err, results) => {
//   if (err) throw err;
//   res.send(`Komuna me ID ${id} u be update me emrin ${emri}`);
//   });
// });

// app.delete('/komunat/:id', (req, res) => {
//   const id = req.params.id;
//   database.query(`DELETE FROM komunat WHERE Id = ?`, [id], (err, results) => {
//     if (err) throw err;
//     res.send(`Komuna me ID ${id} u fshi me sukses`);
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})