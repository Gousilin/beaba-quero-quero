'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/adiantamento')

router.get('/listAdiantamento', controller.read)
router.get('/listAdiantamento/:id_adianta', controller.readId)
router.post('/saveAdiantamento', controller.insert)
router.put('/updateAdiantamento/:id_adianta', controller.update)
router.delete('/deleteAdiantamento/:id_adianta', controller.delete)

module.exports = router