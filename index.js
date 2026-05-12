const http = require('http');
const crypto = require('crypto');

const server = http.createServer((req, res) => {
    const payloadSize = 64 * 1024; // 64kb ответ
    const payload = crypto.randomBytes(payloadSize);
    
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Cache-Control': 'no-cache'
    });
    res.end(payload);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Test server running on port ${PORT}`);
});
