const Spot = require ('../models/spot')

async function create(req,res) {
    console.log(req.body)
    try {
        await Spot.create(req.body)
    } catch(err) {
        res.json({ err })
    }
}

async function updateSpot(req, res) {
    const body = req.body

    Spot.findOne({ _id: req.params.id }, (err, spot) => {
        if (err) {
            console.log('Error!: ' + err)
        }
        spot.name = body.name
        spot.description = body.description
        spot.difficulty = body.difficulty
        spot.location = body.location
        spot.state = body.state
        spot
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: spot._id,
                    message: 'Updated Spot!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Update failed :(',
                })
            })
    })
}


async function deleteSpot(req, res) {
    await Spot.findOneAndDelete({ _id: req.params.id }, (err, spot) => {
        if (err) {
            console.log('Error! : ' + err)
        } if (!spot) {
            console.log('Spot not found')
        } return res.status(200).json({ success: true, data: spot })

    }).catch(err => console.log(err))
}


async function getSpotById(req, res) {
    await Spot.findOne({ _id: req.params.id }, (err, spot) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!spot) {
            return res
                .status(404)
                .json({ success: false, error: `Spot not found` })
        }
        return res.status(200).json({ success: true, data: spot })
    }).catch(err => console.log(err))
}

async function getSpots(req, res) {
    await Spot.find({}, (err, spots) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!spots.length) {
            return res
                .status(404)
                .json({ success: false, error: `Spot not found` })
        }
        return res.status(200).json({ success: true, data: spots })
    }).catch(err => console.log(err))
}


module.exports = {
    create,
    updateSpot,
    deleteSpot,
    getSpotById,
    getSpots
}