// node webapp framework
const express = require('express');
// instantiate server app
const app = express();
const PORT = 8080

const INVENTORY = [
  {
  name: 'chips', 
  type: 'food', 
  status: 'home',
  quantity: 3
},
{
  name: 'cookies', 
  type: 'food', 
  status: 'couch',
  quantity: 6
},
{
  name: 'movies', 
  type: 'entertainment', 
  status: 'living',
  quantity: 300
},
];

// Create app route (req: request, res: response)
app.get('/', (req, res) => {
  res.send('Hello Fuker');
});

// CRUD = DB => Server
// C: Create  => post
// R: Read    => get
// U: Update  => put
// D: Delete  => delete

// TODO: Make a full '/inventory' route

// GET for inventory
app.get('/inventory', (req, res) => {
  res.send(INVENTORY);
});

// Thoughy Experiment
app.get('/inventory/last-item', (req, res) => {
  res.send(INVENTORY[INVENTORY.length - 1]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});