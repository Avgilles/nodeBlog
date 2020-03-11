const express = require('express');

// 
const blogRouter= express.Router();

blogRouter.get('/', (request, response)=>{
    //  response.send('hello Node.js');
    const prenom= "JM";
     response.render('index.pug', {prenom});

})
blogRouter.get('/admin', (request, response)=>{ response.send('hello Admin');

})
module.exports=blogRouter;