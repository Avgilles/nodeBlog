const express = require('express');
const Article = require('./models/Article.model');
// 
const blogRouter= express.Router();

blogRouter.get('/', (req, res) => {
    Article.find().populate('author category').exec().then(articles => {
        res.render('index', { articles })
    }).catch(error => res.send(error.message))
 })
 
blogRouter.get('/admin', (request, response)=>{ response.send('hello Admin');

})
module.exports=blogRouter;