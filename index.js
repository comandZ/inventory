// node webapp framework
const express = require('express');
// instantiate server app
const app = express();

// Create app route (req: request, res: response)
app.get('/', (req, res) => {
  res.send('Hello Fuker');
});

app.listen(8080);