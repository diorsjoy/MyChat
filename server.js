const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const users = {};

app.use(express.static(path.join(__dirname, 'public')));

// Route: / responds with a plain text message "hi"
app.get('/', (req, res) => {
  res.send('hi');
});

// Route: /json responds with a JSON object
app.get('/json', (req, res) => {
  res.json({ text: 'hi', numbers: [1, 2, 3] });
});

// Route: /echo echoes back the input query parameter
app.get('/echo', (req, res) => {
  const input = req.query.input || '';
  const normal = `Normal: ${input}`;
  const shouty = `Shouty: ${input.toUpperCase()}`;
  const charCount = `Character Count: ${input.length}`;
  const backwards = `Backwards: ${input.split('').reverse().join('')}`;
  res.json({ normal, shouty, charCount, backwards });
});

// Route: /chat emits a 'message' event with the message from the query parameter
app.get('/chat', (req, res) => {
  const message = req.query.message || '';
  io.emit('message', message);
  res.send('Message sent successfully');
});

// Route: /sse establishes a Server-Sent Events (SSE) connection
app.get('/sse', (req, res) => {
  // Set up SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send a welcome message
  res.write('data: Welcome to SSE\n\n');

  // Set up a periodic message
  const intervalId = setInterval(() => {
    res.write(`data: Server time: ${new Date().toLocaleTimeString()}\n\n`);
  }, 1000);

  // Handle client disconnect
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

// Redirect all routes to the chat.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
