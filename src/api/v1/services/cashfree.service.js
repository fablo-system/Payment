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
async function transfer(transferData) {
  try {
    var res = await Payouts.Transfers.RequestTransfer({
      beneId: transferData.beneId,
      amount: transferData.amount,
      transferId: transferData.transferId,
    });
    if (res.status == "SUCCESS") {
      return {
        status: true,
        message: res.message,
        data: res.data
      }
    } else if (res.status == "PENDING") {
      return {
        status: "pending",
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
      message: "Something Went Wrong",
      data: error
    }
  }
}

async function getTransferDetails(transferData) {
  try {
    const res = await Payouts.Transfers.GetTransferStatus({ referenceId: transferData.referenceId });
    if (res.status == "SUCCESS") {
      return {
        status: true,
        message: res.message,
        data: res.data.transfer
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
      message: "Something Went Wrong",
      data: error
    }
  }
}


//--------------------------------------------------------------------------------
module.exports = {
  //--------------------
  createBeneficiary,
  fetchBeneficiaryDetails,
  //--------------------
  transfer,
  getTransferDetails
}