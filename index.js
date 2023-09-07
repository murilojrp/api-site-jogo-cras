import express from 'express'
import db from "./src/models/index.js";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());

routes(app);

app.use((req, res) => {
  res.status(404).send('Deu pau magrão!')
});

db.sync()
  .then(() => {
      console.log("Synced db.");
  })
  .catch((err) => {
      console.log("Failed to sync db: " + err.message);
  });

app.listen(3000, () => {
    console.log('Api-Site-Jogo-Cras rodando na porta 3000');
});

