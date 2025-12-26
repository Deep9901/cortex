// src/index.js

import express from 'express';
import { ENV } from "./lib/env.js";

const app = express();
const PORT = ENV.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});