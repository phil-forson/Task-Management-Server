const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const AWS = require('aws-sdk');
// const fs = require('fs');

// const s3 = new AWS.S3();
// const params = {
//   Bucket: 'boardbucket',
//   Key: 'data.json'
// };
// const file = fs.createWriteStream('/tmp/data.json');

// s3.getObject(params)
//   .createReadStream()
//   .pipe(file)
//   .on('error', function(err) {
//     console.error(err);
//   })
//   .on('close', function() {
//     console.log('File downloaded successfully.');
//   });


const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)


const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})