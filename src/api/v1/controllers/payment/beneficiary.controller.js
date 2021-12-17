const { success, unknownError, serverValidation, badRequest } = require('../../helpers/response.helper');
const { validationResult } = require('express-validator');
const { createBeneficiary, fetchBeneficiaryDetails } = require('../../services/cashfree.service')
module.exports = {

    addBeneficiary: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                serverValidation(res, { errorName: "serverValidation", errors: errors.array() })
            } else {
                const result = await createBeneficiary(req.body);
                if (result.status == true) {
                    success(res, result.message, beneficiaryDetails)
                } else {
                    badRequest(res, result.message)
                }
            }
        } catch (error) {
            unknownError(res, error)
        }
    },

    getBeneficiaryDetails: async (req, res) => {
        try {
            console.log(req.params.beneId);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                serverValidation(res, { errorName: "serverValidation", errors: errors.array() })
            } else {
                const result = await fetchBeneficiaryDetails({ beneId: req.params.beneId });
                if (result.status == true) {
                    success(res, result.message, result.data)
                } else {
                    badRequest(res, result.message)
                }
            }
        } catch (error) {
            unknownError(res, error)
        }
    },
};