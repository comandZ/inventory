// node webapp framework
const express = require('express');

const bodyParser = require('body-parser');

// instantiate server app
const app = express();
const PORT = 8080

const INVENTORY = [
  {
    id: 1,
    name: 'chips', 
    type: 'food', 
    status: 'home',
    quantity: 3
  },
  {
    id: 2,
    name: 'cookies', 
    type: 'food', 
    status: 'couch',
    quantity: 6
  },
  {
    id: 3,
    name: 'movies', 
    type: 'entertainment', 
    status: 'living',
    quantity: 300
  },
];

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
// Parce application/json
app.use(bodyParser.json());

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

app.post('/inventory', (req, res) => {
  try {
    const newInventory = req.body;

    INVENTORY.push(newInventory);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.put('/inventory/:id', (req, res) => {
  try {
    const newData = req.body;
    const inventroyId = parseInt(req.params.id);
    // req.params = { id: ''}

    for (let i = 0; i < INVENTORY.length; i++) {
      const invItem = INVENTORY[i];
  
      if (invItem.id === inventroyId) {
        if (typeof newData.name !== 'string') {
          res.status(500);
          res.send('Make it a string dummy');
        }
        INVENTORY[i] = {
          ...invItem,
          ...newData,
        };
      }
    }
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.delete('/inventory/:id', (req, res) => {
  try {
    const inventoryId = parseInt(req.params.id);

    for (let i = 0; i < INVENTORY.length; i++) {
      const removeItem = INVENTORY[i];

      if (removeItem.id === inventoryId) {
        INVENTORY.splice(i, 1);
      }
    }
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});