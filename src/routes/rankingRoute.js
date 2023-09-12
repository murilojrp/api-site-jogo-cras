import rankingController from '../controllers/rankingController.js';

export default (app) => {
  app.get('/getranking/:id_ranking', rankingController.getranking);
  app.get('/getranking', rankingController.getranking);
  app.post('/createranking', rankingController.createranking);
  app.delete('/deleteranking/:id_ranking', rankingController.deleteranking);
  app.post('/updateranking/:id_ranking', rankingController.updateranking);
}
