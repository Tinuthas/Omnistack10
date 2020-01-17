

const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const router = Router();

router.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude} = request.body

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    const  {name = login, avatar_url, bio} = apiResponse.data


    console.log(name, avatar_url, bio, github_username)
    const techsArray = techs.split(',').map(tech => tech.trim())

    
  

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
        name,
        github_username,
         avatar_url,
         bio,
         techs: techsArray,
         location
    })

    console.log(name, avatar_url, bio, github_username)

    return response.json({dev})
})

/*router.get('/devs', (req, res) => {
    return res.json({"success": "success"})
})*/

module.exports = router
