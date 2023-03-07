const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

router.post("/my-endpoint", (req, res) => {
  const newData = req.body;

  // Update the JSON file with the new data
  const dbData = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
  dbData.myData.push(newData); // assuming "myData" is an array in your JSON file
  fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(dbData));

  // Send a response to the client
  res.status(200).send("Data successfully added to JSON file!");
});

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
