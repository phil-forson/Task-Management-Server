const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const fs = require('fs');




const server = jsonServer.create()
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()


server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)


const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})