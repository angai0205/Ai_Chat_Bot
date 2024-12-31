const express = require('express');
const app = express();

app.use(express.static(ai_chat_bot + '/public'));   
app.use(express.static(ai_chat_bot + '/views'));

const server = app.listen(5000, () => {
  console.log('Express server has started on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
});