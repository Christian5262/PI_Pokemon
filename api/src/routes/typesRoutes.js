const { Router } = require('express');
const getTypesHandler = require('../handlers/getTypesHandler');

const routerType = Router()

routerType.get("/types", getTypesHandler)

module.exports = routerType;