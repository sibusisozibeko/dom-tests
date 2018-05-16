// get a reference to the sms or call radio buttons
var callTotalElemsTwo = document.querySelector('.callTotalTwo');
var smsTotalElemsTwo = document.querySelector(".smsTotalTwo")
var totalCostElemsTwo = document.querySelector(".totalTwo")

//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

//create a variable that will keep track of the total bill
var billItemTypeRadio = document.querySelector('.billItemTypeRadio')
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//Dom logic
var totalCostTwo = 0;
var handle1 = TextBill();
function checkedRadio(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value;
     handle1.text(billItemType);
     callTotalElemsTwo.innerHTML = handle1.col();
     smsTotalElemsTwo.innerHTML = handle1.mms();
     totalCostElemsTwo.innerHTML = handle1.bill();
     totalCostTwo = handle1.bill();

     if (totalCostTwo >= 50){
         // adding the danger class will make the text red
         totalCostElemsTwo.classList.add("danger");
     }
     else if (totalCostTwo >= 30){
      totalCostElemsTwo.classList.add("warning");
     }

 }
}
radioBillAddBtn.addEventListener('click', checkedRadio);
