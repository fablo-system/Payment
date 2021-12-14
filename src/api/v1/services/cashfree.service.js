const { Payouts } = require('@cashfreepayments/cashfree-sdk');

// Instantiate Cashfree Payouts
const payoutsInstance = new Payouts({
  env: 'TEST',
  clientId: '<CLIENT_ID>',
  clientSecret: '<CLIENT_SECRET>',
});

function transfer(){
    try {
        Payouts.transfers
        .requestTransfer({
          beneId: 'JOHN18012',
          amount: '100.00',
          transferId: 'DEC2017',
        })
        .then(function (d) {
          console.log(d);
          return d;
        });
    } catch (error) {
        console.log(error);
        return error;
    }
   
}
