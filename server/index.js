const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
const port = 4300;

app.use(cors());

app.post('/download', (req, res) => {
    res.download('resume.pdf');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
