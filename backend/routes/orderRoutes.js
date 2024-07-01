const express = require('express')
const verifyToken = require('../middlewares/auth')
const { placeOrder } = require('../controllers/orderContoller')
const orderRouter = express.Router()


orderRouter.post("/",verifyToken,placeOrder)


module.exports = orderRouter