const express =  require('express');
const server = express();
const port = 3333;
const nunjucks = require('nunjucks');

server.use(express.static('public')); 


nunjucks.configure('views', {
    express: server,
    noCache: true
});

const ideas= [
    {
        img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953446.svg?token=exp=1614633817~hmac=06afcb0e40166d8f894c3aaf2de0b95d',
        title: 'Cursos de recuperação de dados',
        category:'Estudo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
        url: 'https://www.dbsystem.com.br'
    },
    {
        img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953238.svg?token=exp=1614633817~hmac=be5e9fde81cfbed52b68ad4021164574',
        title: 'Firewall',
        category:'Estudo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
        url: 'https://www.dbsystem.com.br'
    },
    {
        img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953480.svg?token=exp=1614633817~hmac=4acac509fcbbdd0248171696457a3de3',
        title: 'Backup em Nuvem',
        category:'Estudo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
        url: 'https://www.dbsystem.com.br'
    },
    {
        img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953480.svg?token=exp=1614633817~hmac=4acac509fcbbdd0248171696457a3de3',
        title: 'Backup em Nuvem',
        category:'Estudo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
        url: 'https://www.dbsystem.com.br'
    }
]



server.get('/', (_req, res) => {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];

    for (const idea of reversedIdeas) {
        if (lastIdeas.length <= 2) {
            lastIdeas.push(idea);       
        }
    }

    res.render('index.html', { ideas: lastIdeas });
});

server.get('/ideas', (_req, res) => {

    const reversedIdeas = [...ideas].reverse();

    res.render('ideias.html', {ideas: reversedIdeas});
});


server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


