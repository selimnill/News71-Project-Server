const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
    res.send("Back-End Running .!");
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === "08"){
        res.send(news);
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    }
})

app.get('/news/:id', (req, res) =>  {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})


app.get('/news', (req, res) => {
    res.send(news);
})



app.listen(port, () => {
    console.log('port is running on ', port);
})