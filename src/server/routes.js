const { handlerPostPredict, handlerGetHistories } = require('../server/handler');

const routes = [
  
  {
    path: '/predict',
    method: 'POST',
    handler: handlerPostPredict,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000000
      }
    }
  },

  {
    path: '/predict/histories',
    method: 'GET',
    handler: handlerGetHistories
  }

]

module.exports = routes;