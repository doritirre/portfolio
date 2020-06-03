const express = require('express')

const server = express()

server.get("/", (request, response) => {
    return response.send('Hello Word')
})

server.listen(5000, () => console.log("Server is Running"))