const { body ,param } = require('express-validator')

exports.validateTransfer = (method) => {
  switch (method) {
    case 'transfer': {
      return [
        body('beneId', 'Beneficiary Id is Required').not().isEmpty().trim().escape(),
        body('amount', 'Amount is Required').not().isEmpty().trim().escape(),
        body('transferId', 'Transfer id is Required').not().isEmpty().trim().escape()
      ]
    }
    case 'getTransferDetails': {
      return [
        param('referenceId' , 'Reference Id is Required').not().isEmpty().trim().escape()
      ]
    }
  }
}

//    beneId: '9575513319',
// amount: '100.00',
// transferId: 'DEC2017',
exports.validateBeneficiary = (method) => {
  switch (method) {
    case 'addBeneficiary': {
      return [
        body('beneId', 'Beneficiary ID is Required').not().isEmpty().trim().escape(),
        body('name', 'Name is Required').not().isEmpty().trim().escape(),
        body('email', 'Invalid Email ID').exists().isEmail(),
        body('phone', 'Phone is Required').exists().isMobilePhone(),
        body('bankAccount', 'Bank Account number is Required').not().isEmpty().trim().escape(),
        body('ifsc', 'IFSC code is Required').not().isEmpty().trim().escape(),
        body('address1', 'Address is Required').not().isEmpty().trim().escape(),
        body('city', 'City is Required').not().isEmpty().trim().escape(),
        body('state', 'State is Required').not().isEmpty().trim().escape(),
        body('pincode', 'Pincode is Required').not().isEmpty().trim().escape(),
      ]
    }
    case 'getBeneficiaryDetails': {
      return [
        param('beneId', 'Beneficiary ID is Required').not().isEmpty().trim().escape(),
      ]
    }

  }
}