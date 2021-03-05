const express =  require('express');
const server = express();
const port = 3333;
const nunjucks = require('nunjucks');

server.use(express.static('public')); 


nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get('/', (req, res) => {
    res.render('index.html');
});

server.get('/ideas', (req, res) => {
    res.render('ideias.html');
});


server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


