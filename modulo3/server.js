const express = require('express')
const nunjucks = require('nunjucks');

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", (request, response) => {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/6643122?s=460&v=4",
        name: "Maik Brito",
        role: "Instrututor - Rocketseat",
        description: 'Programador full-stak, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseta.com.br" target="_blank"> Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/maykbrito"},
            {name: "Twitter", url: "https://github.com/maykbrito"},
            {name: "Linkedin", url: "https://github.com/maykbrito"}
        ]
    }

    return response.render('about', {about: about})
})

server.get("/portfolio", (request, response) => {
    return response.render('portfolio', { items: videos })
})

server.listen(5000, () => console.log("Server is Running"))