// node webapp framework
const express = require('express');
// instantiate server app
const app = express();
const PORT = 8080

// Create app route (req: request, res: response)
app.get('/', (req, res) => {
  res.send('Hello Fuker');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});