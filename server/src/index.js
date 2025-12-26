// src/index.js

import express from 'express';
import { ENV } from "./lib/env.js";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";

const app = express();
const PORT = ENV.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth)); 

app.use(express.json());


app.use(express.json());

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});