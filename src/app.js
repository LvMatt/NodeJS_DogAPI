const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require("request")
const dogApi = require('./dogapi');

const app = express();


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);




app.get('', (req, res)=>{
    res.render('index', {
        title: 'Intro Page',
        name: 'DogFinder app',
        author: 'Matus Kalanin'
    })
})
// Get Dog
app.get('/dog', (req, res)=>{
    if(!req.query.dog) {
        return res.send({
            error: 'You must provide name of the dog'
        })
    }
    dogApi(req.query.dog, (error, image) =>{
        if(error){
            return res.send({error})
        }
        res.send({
            dog: req.query.dog,
            image:image

        })
    })
})

var PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
});

const app = ()=>{
    console.log("app");
}