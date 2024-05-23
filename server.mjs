import express from 'express';
import cors from 'cors';
import util from 'util';

const app = express();
const port = 8080;

app.use(cors());

app.use(express.static('public'));

app.get('/ping', (_, res) => {
  return res.json();
});

app.post('/log', express.json(), (req, res) => {
  console.log(util.inspect(req.body, { depth: Infinity }));
  return res.json(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
