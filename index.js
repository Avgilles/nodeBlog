require('dotenv').config();

const express= require('express');
const mongoose= require('mongoose');

const app = express();



const blogRouter = require('./blog.router');

// moteur template

app.set('view engine', 'pug');

app.set('views', './views');


const PORT= 9000;
const HOST = 'localhost';

app.use(express.static('./public'));
app.use('/', blogRouter);


// il faut placer les valeurs suivante dqns la chaine
// process.env.DB_USER;
// process.env.DB_PASSWORD;
// process.env.DB_HOST;
// process.env.DB_NAME;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


mongoose.connect
    (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, options)
    .then(()=> console.log(`Moogose : Connexion établie à Atlas`))
// je rajoute un then pour attendre qu'on se connecte à atlas puis express
    .then(()=>{
        app.listen(PORT,HOST, ()=>{
            console.log(`Express: Le serveur écoute sur http://${HOST}:${PORT}`)
        })
    })

    .catch((err)=> console.error(err));



;