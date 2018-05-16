function TextBill(){
var call=0;
var sms=0;
var total=0;
function textBillTotal(billTypeEntered){

    if (billTypeEntered == "call"){
        call += 2.75;
    }
    else if (billTypeEntered == "sms"){

        sms += 0.75;
    }
  }


  function calls(){
return  call.toFixed(2);
  }


  function smses() {
   return sms.toFixed(2);
  }

  function totals() {
  return  total = call + sms;


  }

    return {
    text : textBillTotal,
    col : calls,
    mms : smses,
    bill : totals
    }
  }
