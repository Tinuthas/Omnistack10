

const { Router } = require('express')
const DevController = require('./controllers/DevController')

const router = Router();

router.post('/devs', DevController.store)

/*router.get('/devs', (req, res) => {
    return res.json({"success": "success"})
})*/

module.exports = router
