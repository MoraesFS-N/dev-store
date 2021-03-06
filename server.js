const express =  require('express');
const server = express();
const port = 3333;
const nunjucks = require('nunjucks');
const db = require('./db');

server.use(express.static('public')); 
server.use(express.urlencoded({extended: true}));

nunjucks.configure('views', {
    express: server,
    noCache: true
});

// const ideas= [
//     {
//         img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953446.svg?token=exp=1614633817~hmac=06afcb0e40166d8f894c3aaf2de0b95d',
//         title: 'Cursos de recuperação de dados',
//         category:'Estudo',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
//         url: 'https://www.dbsystem.com.br'
//     },
//     {
//         img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953238.svg?token=exp=1614633817~hmac=be5e9fde81cfbed52b68ad4021164574',
//         title: 'Firewall',
//         category:'Estudo',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
//         url: 'https://www.dbsystem.com.br'
//     },
//     {
//         img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953480.svg?token=exp=1614633817~hmac=4acac509fcbbdd0248171696457a3de3',
//         title: 'Backup em Nuvem',
//         category:'Estudo',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
//         url: 'https://www.dbsystem.com.br'
//     },
//     {
//         img: 'https://www.flaticon.com/svg/vstatic/svg/3953/3953480.svg?token=exp=1614633817~hmac=4acac509fcbbdd0248171696457a3de3',
//         title: 'Backup em Nuvem',
//         category:'Estudo',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut maxime facere facilis assumenda placeat corporis, minima eaque ad architecto harum modi expedita nulla quam impedit, totam accusantium pariatur neque.',
//         url: 'https://www.dbsystem.com.br'
//     }
// ]



server.get('/', (_req, res) => {

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        
        if (err) {
            console.log(err);
            res.send('OPS... Erro no banco de dados!')
        }

        console.log(rows);

        const reversedIdeas = [...rows].reverse();

        let lastIdeas = [];

        for (const idea of reversedIdeas) {
            if (lastIdeas.length <= 2) {
                lastIdeas.push(idea);       
            }
        }

    res.render('index.html', { ideas: lastIdeas });
    });
});

server.get('/ideas', (_req, res) => {

    db.all(`SELECT * FROM ideas`, function(err, rows) {
    
        if (err) {
            console.log(err);
            res.send('OPS... Erro no banco de dados!')
        }

        console.log(rows);

        const reversedIdeas = [...rows].reverse();

        res.render('ideias.html', {ideas: reversedIdeas});

    });
});

server.post('/create', (req, res) =>{

    const query = `INSERT INTO ideas(
             image,
             title,
             category,
             description,
             link
         ) VALUES (?, ?, ?, ?, ?);`;

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ];
         
    db.run(query, values, (err) => {
        if (err) {
            console.log(err);
            res.send('OPS...Erro no banco de dados!!')
        } else {
            console.log(this);
        }
        return res.redirect('/ideas');
    })

})

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


