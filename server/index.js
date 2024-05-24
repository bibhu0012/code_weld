
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./pool');

const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(cors());

app.post('/contact', async (req, res) => {

    const { name, email, phone, message } = req.body;
    console.log(name);
    const newContact = await pool.query("insert into contact_us values($1,$2,$3,$4)",[name, email, phone, message]);
    res.status(200).json(newContact);
  
});

app.post('/requestcallback', async (req, res) => {
  
  const { name, email, phone } = req.body;
  console.log(name);
  const newContact = await pool.query("insert into request_callback values($1,$2,$3)",[name, email, phone]);
  res.status(201).json(newContact);

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
