const { success , unknownError, serverValidation } = require('../../helpers/response.helper');
const { validationResult } = require('express-validator');
const {transfer} = require('../../services/cashfree.service')
module.exports = {

    transfer: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              serverValidation(res , {errorName : "serverValidation", errors :errors.array() })
            } else {
                const response = await transfer(req.body);
                console.log(response);
                success(res , '',response)
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