const express = require('express');
const router = express.Router();
const {validateTransfer , validateBeneficiary} = require('../validations/payment.validation');

//----------beneficiary-----------------------------------------------------------
const beneficiaryController = require('../controllers/payment/beneficiary.controller');
router.get('/beneficiary/get/:beneId' , validateBeneficiary('getBeneficiaryDetails'), beneficiaryController.getBeneficiaryDetails)
router.post('/beneficiary/add' , validateBeneficiary('addBeneficiary') , beneficiaryController.addBeneficiary)
//----------transfer--------------------------------------------------------------
const transferController = require('../controllers/payment/transfer.controller');
router.get('/transfer/details/:referenceId' , validateTransfer('getTransferDetails'),transferController.getTransferDetails);
router.post('/transfer/pay' , validateTransfer('transfer'),transferController.transfer);



module.exports = router;