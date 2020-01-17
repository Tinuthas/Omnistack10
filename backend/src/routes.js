

const { Router } = require('express')
const DevController = require('./controllers/DevController')

const router = Router();

router.get('/devs', DevController.index)

router.post('/devs', DevController.store)

module.exports = router
