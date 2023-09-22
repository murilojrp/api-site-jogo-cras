import express from 'express'
import db from "./src/models/index.js";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());

routes(app);

app.use((req, res) => {
  res.status(404).send('Rota não encontrada!')
});

db.sync()
  .then(() => {
      console.log("Base de dados sincronizada com sucesso!");
      console.log('Api-Site-Jogo-Cras rodando na porta 3000!');
  })
  .catch((err) => {
      console.log("Falha em sincronizar a base de dados: " + err.message);
  });

app.listen(3000, () => {});

