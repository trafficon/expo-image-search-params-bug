const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Requested URL:", req.originalUrl);

    const color = req.query.color;
    res.send(`<svg viewbox="0 0 32 32"><rect width="32" height="32" fill="${color}" /></svg>`)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

