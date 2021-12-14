const { success , unknownError, serverValidation } = require('../helpers/response.helper');
const { validationResult } = require('express-validator');
const {directTransfer} = require('../services/cashfree.service')
module.exports = {

    directTransfer: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              serverValidation(res , {errorName : "serverValidation", errors :errors.array() })
            } else {
                const response = await directTransfer();
                console.log(response);
                res.success(res ,response)
            }
        } catch (error) {
            console.log(error);
            unknownError(res ,error)

        }
    },

    getAllOrder: async (req, res) => {
        try {
        } catch (error) {

        }
    },
};