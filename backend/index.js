import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';
import { WebSocketServer } from 'ws';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

const server = app.listen(5000, () => {
  console.log('Server running on port 5000');
});

const wss = new WebSocketServer({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received:', message);
    // Broadcast message to all clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

export default app; // Export the app for testing
