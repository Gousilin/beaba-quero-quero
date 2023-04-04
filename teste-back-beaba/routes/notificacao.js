'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/notificacao')

router.get('/listNotificacao', controller.read)
router.get('/listNotificacao/:id_notifica', controller.readId)
router.post('/saveNotificacao', controller.insert)
router.put('/updateNotificacao/:id_notifica', controller.update)
router.delete('/deleteNotificacao/:id_notifica', controller.delete)

module.exports = router
