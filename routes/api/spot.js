const express = require('express')
const router = express.Router()
const spotCtrl = require('../../controllers/spot')

router.post('/new', spotCtrl.create)

module.exports = router