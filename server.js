// server.js
const express = require('express');
const cors = require('cors');
const produkRoute = require('./routes/produk');

const app = express();
app.use(cors());

app.use('/api/produk', produkRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server backend jalan di port ${PORT}`);
});
