const express = require('express');
const app = express();
const port = 3008;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js app!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
