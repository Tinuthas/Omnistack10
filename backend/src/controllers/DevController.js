const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseStringAsArray')

// index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find()
        
        return response.json(devs)
    },

    async store(request, response)  {
        const { github_username, techs, latitude, longitude} = request.body 

        let dev = await Dev.findOne({github_username})

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const  {name = login, avatar_url, bio} = apiResponse.data
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                name,
                github_username,
                 avatar_url,
                 bio,
                 techs: techsArray,
                 location
            })
       }
       return response.json({dev})
    },

    async update(request, response) {
        const { name, bio, techs, latitude, longitude} = request.body

        let dev = await Dev.findOne(request.params)

        if (name) dev.name = name

        if (bio) dev.bio = bio

        if (techs) {
            const techsArray = parseStringAsArray(techs)
            dev.techs = techsArray
        }

        if (latitude && longitude) {
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev.location = location
        }

        await Dev.updateOne(dev)

        return response.json(dev)
    },

    async destroy(request, response) {
        console.log(request.params)
        let dev = await Dev.findOne(request.params)
        await Dev.deleteOne(dev)
        response.json(dev)
    }
}