const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Tell Express to automatically serve any static files in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
// Explicitly handle the root URL '/' to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Explicitly handle the '/about' URL to serve about.html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
// Custom 404 Error page (Middleware that catches anything not found above)
app.use((req, res) => {
    res.status(404).send('<h1>404: Page Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server is flying at http://localhost:${PORT}`);
});