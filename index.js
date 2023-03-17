// node webapp framework
const express = require('express');
// instantiate server app
const app = express();
const PORT = 8080

const inventory = [{
  name: '', 
  type: '', 
  status: '',
  quantity: ''
}];

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});