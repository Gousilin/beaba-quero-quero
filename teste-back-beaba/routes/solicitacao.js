'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/solicitacao')

router.get('/listSolicitacao', controller.read)
router.get('/listSolicitacaoPendente', controller.readPendentes)
router.get('/listSolicitacaoA', controller.readA)
router.get('/listSolicitacaoR', controller.readR)
router.get('/listSolicitacao/:id_solicitacao', controller.readId)
router.post('/saveSolicitacao', controller.insert)
router.put('/updateSolicitacao/:id_solicitacao', controller.update)
router.delete('/deleteSolicitacao/:id_solicitacao', controller.delete)

module.exports = router
