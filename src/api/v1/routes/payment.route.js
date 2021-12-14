const express = require('express');
const router = express.Router();
const {validate} = require('../validations/payment.validation');

//----------order----------------------------------------------------------------
const directTransferController = require('../controllers/directTransfer.controller');
router.post('/directTransfer' , validate('directTransfer'),directTransferController.directTransfer);



module.exports = router;