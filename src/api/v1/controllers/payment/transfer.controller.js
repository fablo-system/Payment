const { success, unknownError, serverValidation, badRequest } = require('../../helpers/response.helper');
const { validationResult } = require('express-validator');
const { transfer, getTransferDetails } = require('../../services/cashfree.service')
module.exports = {

    transfer: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                serverValidation(res, { errorName: "serverValidation", errors: errors.array() })
            } else {
                const result = await transfer(req.body);
                if (result.status == true) {
                    success(res, result.message, result.data)
                } else if (result.status == "pending") {
                    success(res, result.message, result.data)
                } else {
                    badRequest(res, result.message)
                }
            }
        } catch (error) {
            console.log(error);
            unknownError(res, error);
        }
    },

    getTransferDetails: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                serverValidation(res, { errorName: "serverValidation", errors: errors.array() })
            } else {
                const result = await getTransferDetails({ referenceId: req.params.referenceId });
                if (result.status == true) {
                    success(res, result.message, result.data)
                } else {
                    badRequest(res, result.message)
                }
            }
        } catch (error) {
            console.log(error);
            unknownError(res, error);
        }
    },

};  