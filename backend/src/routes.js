

const { Router } = require('express')
const DevController = require('./controllers/DevController')

const router = Router();

router.post('/devs', DevController.store)

module.exports = router
