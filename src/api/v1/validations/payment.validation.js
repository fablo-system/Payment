const { body } = require('express-validator')

exports.validate = (method) => {
  switch (method) {
    case 'directTransfer': {
     return [ 
        body('userName', 'userName doesnt exists').exists(),
        body('email', 'Invalid email Id').exists().isEmail(),
        body('phone').optional().isInt(),
        body('status').optional().isIn(['enabled', 'disabled'])
       ]   
    }
  }
}