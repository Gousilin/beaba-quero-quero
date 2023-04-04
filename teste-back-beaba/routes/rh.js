'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/rh')

router.get('/listRh', controller.read)
router.post('/saveRh', controller.insert)
router.put('/updateRh/:id_rh', controller.update)
router.delete('/deleteRh/:id_rh', controller.delete)

module.exports = router
