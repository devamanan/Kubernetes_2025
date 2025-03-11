import express from 'express';
import os from 'os';
import fetch from 'node-fetch';

const app = express();

app.get('/', (req, res) => {
    const helloMessage = `Version2.0 Hello from ${os.hostname()}`;
    res.send(helloMessage);
    console.log(helloMessage);
});

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
