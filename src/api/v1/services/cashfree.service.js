const Cashfree = require("cashfree-sdk");
const path = require('path');
const cashfreeKey = path.resolve("./src/api/v1/config/cashfree.pem");
//----------initialization--------------------------------------------------------
//Initialize Cashfree Payout
let Payouts = Cashfree.Payouts;
Payouts.Init({
  "ENV": "PRODUCTION",
  "ClientID": "CF143934C6TGEPLJDDO8UP2KFV60",
  "ClientSecret": "df5934678f0ebd27231958c1ef57bb095dc22405",
  "PathToPublicKey": cashfreeKey,
});

//----------beneficiary-----------------------------------------------------------
async function createBeneficiary(beneficiaryData) {
  try {
    var res = await Payouts.Beneficiary.Add({
      "beneId": beneficiaryData.beneId,
      "name": beneficiaryData.name,
      "email": beneficiaryData.email,
      "phone": beneficiaryData.phone,
      "bankAccount": beneficiaryData.bankAccount,
      "ifsc": beneficiaryData.ifsc,
      "address1": beneficiaryData.address1,
      "city": beneficiaryData.city,
      "state": beneficiaryData.state,
      "pincode": beneficiaryData.pincode
    });
    if (res.status == "SUCCESS") {
      return {
        status: true,
        message: res.message,
        data: {}
      }
    } else {
      return {
        status: false,
        message: res.message,
        data: {}
      }
    }
  } catch (error) {
    return {
      status: false,
      message: res.message,
      data: error
    }
  }
}

async function fetchBeneficiaryDetails(beneficiaryData) {
  try {
    const res = await Payouts.Beneficiary.GetDetails(beneficiaryData);
    if (res.status == "SUCCESS") {
      return {
        status: true,
        message: res.message,
        data: res.data
      }
    } else {
      return {
        status: false,
        message: res.message,
        data: {}
      }
    }
  } catch (error) {
    return {
      status: false,
      message: res.message,
      data: error
    }
  }
}

//----------transfer--------------------------------------------------------------
async function transfer() {
  try {
    var res = await Payouts.Transfers.RequestTransfer({
      beneId: 'ashu9575513319',
      amount: '1.00',
      transferId: 'DEC20212',
    });
    return res;
  } catch (error) {
    console.log("error" + error);
    return error;
  }

}

//--------------------------------------------------------------------------------
module.exports = {
  //--------------------
  createBeneficiary,
  fetchBeneficiaryDetails,
  //--------------------
  transfer
}