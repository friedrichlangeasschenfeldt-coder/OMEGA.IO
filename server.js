import { publicDecrypt } from 'crypto';
import express from 'express';
import { createServer } from 'http';

const port = 3000;


const app = express();
const httpServer = createServer(app);

app.use(express.static('public'));

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});