
//Dom logicCheckRadio

function CheckRadio(){
  var call = 0;
  var sms = 0;
  var totalCosts = 0;
  function checkedRadioBtn(billItemType){
   // billItemType will be 'call' or 'sms' // get the value entered in the billType textfield  // update the correct total
    if (billItemType === "call"){
        call += 2.75;
    }
    else if (billItemType === "sms"){
        sms += 0.75;
    }
}


function calling() {
  return call.toFixed(2);
}

function smsing() {
return  sms.toFixed(2);
}

function totaling() {
return totalCosts = call + sms;
}

return {
  check : checkedRadioBtn,
  phone : calling,
  texting  : smsing,
  tot   : totaling

}
}
