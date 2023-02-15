const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./build'));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Запускаемся на порте - ${PORT}!`);
});
