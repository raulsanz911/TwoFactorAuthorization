const express = require('express');
const bodyParser = require('body-parser');
const { initDb } = require('./models/codeModel'); // Adjust this path to match your project structure.
const smsRoutes = require('./routes/smsRoutes');

const app = express();
app.use(bodyParser.json());

async function startServer() {
    try {
        await initDb();
        app.use('/', smsRoutes);
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Failed to initialize server:', error.message);
    }
}

startServer();
