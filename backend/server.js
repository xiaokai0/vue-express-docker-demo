const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.get('/api/hello', (req, res) => {
    res.send({
        code: 200,
        msg: 1,
        data: [{ name: '张三', id: 1 }, { name: '李四', id: 2 }, { name: '李四', id: 3 }, { name: '王五', id: 4 }]
    }).statusCode(200)
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});