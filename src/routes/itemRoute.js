import itemController from '../controllers/itemController.js';

export default (app) => {
  app.get('/getItem/:id_item', itemController.getItem);
  app.get('/getItem', itemController.getItem);
  app.post('/createItem', itemController.createItem);
  app.delete('/deleteItem/:id_item', itemController.deleteItem);
  app.post('/updateItem/:id_item', itemController.updateItem);
}