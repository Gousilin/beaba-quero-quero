'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/squad')

router.get('/listSquad', controller.read)
router.get('/listSquad/:id_squad', controller.readId)
router.post('/saveSquad', controller.insert)
router.put('/updateSquad/:id_squad', controller.update)
router.delete('/deleteSquad/:id_squad', controller.delete)

module.exports = router
