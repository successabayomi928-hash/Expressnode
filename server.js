const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port where the server will listen
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Check if the user is requesting the home page
    if (req.url === '/' || req.url === '/index.html') {
        
        // Read the HTML file from your computer
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Server Error');
            } else {
                // Send a 200 OK status and the HTML content to the browser
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
        
    } else {
        // Handle 404 Not Found for any other URLs
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
