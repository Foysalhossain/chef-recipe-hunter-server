const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const allChefs = require('./data/chefs.json')
app.get('/', (req, res) => {
    res.json({ message: 'hello server are you ok?' })
})

app.get('/allData', (req, res) => {
    res.send(allChefs)
})

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    const item = allChefs.find(pd => pd.id == id);
    res.send(item);
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})