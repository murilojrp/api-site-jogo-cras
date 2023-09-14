import rankingController from '../controllers/rankingController.js';

export default (app) => {
  app.get('/getRanking/:id_ranking', rankingController.getRanking);
  app.get('/getRanking', rankingController.getRanking);
  app.post('/createRanking', rankingController.createRanking);
  app.delete('/deleteRanking/:id_ranking', rankingController.deleteRanking);
  app.post('/updateRanking/:id_ranking', rankingController.updateRanking);
}
