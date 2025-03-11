import express from 'express';
import os from 'os';

const app = express();

app.get('/', (req, res) => {
    const helloMessage = `Version2.0 Hello from ${os.hostname()}`;
    res.send(helloMessage);
    console.log(helloMessage);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
