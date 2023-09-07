import posicaoController from '../controllers/posicaoController.js';

export default (app) => {
  app.get('/getPosicao/:id_posicao', posicaoController.getPosicao);
  app.get('/getPosicao', posicaoController.getPosicao);
  app.post('/createPosicao', posicaoController.createPosicao);
  app.delete('/deletePosicao/:id_posicao', posicaoController.deletePosicao);
  app.post('/updatePosicao/:id_posicao', posicaoController.updatePosicao);
}