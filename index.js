const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: 'hello server are you ok?' })
})

app.get('/allData', (req, res) => {
    res.send({ result: 'okkkk' })
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})