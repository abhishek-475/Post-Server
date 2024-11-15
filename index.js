const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()


server.use(middleware)

server.use(router)


const PORT = 3001

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})