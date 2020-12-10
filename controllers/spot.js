const Spot = require ('../models/spot')

async function create(req,res) {
    console.log(req.user)
    try {
        await Spot.create(req.body)
    } catch(err) {
        res.json({ err })
    }
}

module.exports = {
    create
}