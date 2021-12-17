const express = require('express');
const router = express.Router();
const {validateTransfer , validateBeneficiary} = require('../validations/payment.validation');

//----------beneficiary-----------------------------------------------------------
const beneficiaryController = require('../controllers/payment/beneficiary.controller');
router.get('/beneficiary/get/:beneId' , validateBeneficiary('getBeneficiaryDetails'), beneficiaryController.getBeneficiaryDetails)
router.post('/beneficiary/add' , validateBeneficiary('addBeneficiary') , beneficiaryController.addBeneficiary)
//----------transfer--------------------------------------------------------------
const transferController = require('../controllers/payment/transfer.controller');
router.post('/transfer/direct' , validateTransfer('transfer'),transferController.transfer);



module.exports = router;