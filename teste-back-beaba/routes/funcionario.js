'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/funcionario')

router.get('/listFuncionarios', controller.read)
router.get('/listFuncionariosGestores', controller.readGestor)
router.get('/listFuncionariosColaboradores', controller.readColaborador)
router.get('/listFuncionarios/:id_matricula', controller.readId)
router.post('/saveFuncionarios', controller.insert)
router.post('/funcionarios/login', controller.login)
router.post('/funcionarios/loginColab', controller.loginColab)
router.get('/funcionarios/checktoken', controller.token)
router.get('/funcionarios/destroytoken', controller.destroyToken)
router.put('/updateFuncionarios/:id_matricula', controller.update)
router.delete('/deleteFuncionarios/:id_matricula', controller.delete)

module.exports = router
