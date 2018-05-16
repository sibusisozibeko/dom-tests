

// get a reference to the textbox where the bill type is to be entered
var callTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');
var billTypeText = document.querySelector('.billTypeText');

//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');

//create a variable that will keep track of the total bill

// callTotalElem.innerHTML = "0.00";
// smsTotalElem.innerHTML = "0.00";
// totalCostElem.innerHTML = "0.00";
var totalCost=0;

var handle = TextBill();
function textBillTotal(){

    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    handle.text(billTypeEntered);
    //update the totals that is displayed on the screen.
    callTotalElem.innerHTML = handle.col();
    smsTotalElem.innerHTML = handle.mms();
    totalCostElem.innerHTML = handle.bill();
    totalCost = handle.bill();
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}



//add an event listener for when the add button is pressed

addToBillBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
