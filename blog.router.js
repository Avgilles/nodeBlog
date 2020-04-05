const express = require ('express');
const blogRouter = express.Router();

const Article = require('./models/Article.model')
const Authors = require('./models/Author.model')
const Categorie = require('./models/Category.model')


blogRouter.get('/', (req, res) =>{
    Article.find().populate('author category').exec().then(articles => {
        console.log({articles:articles.author})
        console.log('article',articles.author)
        res.render('index.pug', { articles })
    }).catch(error => res.send(error)) 
});
blogRouter.get('/admin', (request, response) =>{
    console.log("GILLES ADMIN")
});
blogRouter.get('/article/:id', async (req, res) =>{
    await Article.findById(req.params.id).populate('author category').exec().then(article => {
        res.render('article.pug', { article })
    }).catch(error => res.send(error))
});

module.exports = blogRouter;