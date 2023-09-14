import tarefaController from '../controllers/tarefaController.js';

export default (app) => {
  app.get('/getTarefa/:id_tarefa', tarefaController.getTarefa);
  app.get('/getTarefa', tarefaController.getTarefa);
  app.post('/createTarefa', tarefaController.createTarefa);
  app.delete('/deleteTarefa/:id_tarefa', tarefaController.deleteTarefa);
  app.post('/updateTarefa/:id_tarefa', tarefaController.updateTarefa);
}