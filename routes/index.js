const routes = require('express').Router()
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.helloRoute)
routes.get('/Aaron', lesson1Controller.helloAaronRoute)
routes.get('/Tina', lesson1Controller.helloTinaRoute)
routes.get('/Braedan', lesson1Controller.helloBraedanRoute)
routes.get('/Noah', lesson1Controller.helloNoahRoute)



module.exports = routes;
