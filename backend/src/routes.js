

const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const router = Router();

router.get('/devs', DevController.index)

router.post('/devs', DevController.store)

router.put('/devs/:_id', DevController.update)

router.delete('/devs/:_id', DevController.destroy)

router.get('/search', SearchController.index)

module.exports = router
