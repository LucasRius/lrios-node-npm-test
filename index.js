const express = require('express');

const app = express();
const PORT = 3000;

// O uso de 'var' é um erro comum de linting (no-var)
const message = 'Hello, World!';

app.get('/', (req, res) => {
  console.log('Request received');
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
