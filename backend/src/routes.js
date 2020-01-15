

const { Router } = require('express')
const axios = require('axios')

const router = Router();

router.post('/devs', async (request, response) => {
    const { github_username } = request.body

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    console.log(apiResponse.data)
    const  {name = login, avatar_url, bio} = apiResponse.data

    console.log(name, avatar_url, bio, github_username)

    return response.json({message:'Hello World'})
})

module.exports = router
