// get a reference to the sms or call radio buttons
function Setting() {


var callamount = 0;
var smsamount = 0;
var totalamount =0;

var callcost =2.75;
var smscost =0.75;
var warningLevel =50;
var criticalevel =80;

function BillSettings(settingsItemType){

    // get the value entered in the billType textfie// update the correct total
    if (settingsItemType === "call"){
        callamount += callcost;
        totalamount += callcost;

        if (totalamount> criticalevel){
        var diff = totalamount- criticalevel
          callamount-= diff;
          totalamount -= diff;
        }

}

    else if (settingsItemType === "sms"){
        smsamount += smscost;
        totalamount += smscost;

        if (totalamount> criticalevel){
        var diff = totalamount- criticalevel
          smsamount-= diff;
          totalamount -= diff;
        }

    }

}

function callings() {
  return callamount.toFixed(2);
}

function smsings() {
  return smsamount.toFixed(2);
}


function totaling() {
return  totalamount= callamount + smsamount;
}
 function gettotal() {
return totalamount
 }

function update(value) {
  if(value!= ""){
  callcost = parseFloat(value);

}
}

function getCostCall(){

  return callcost
}

function getupdate() {
  return update;
}


function costings(value) {
  if(value!= ""){
return  smscost = parseFloat(value);
}
}

function getsmscost() {
  return smscost;
}

function getcost() {
  return costings;
}

function warnings(value) {
  if(value!= ""){
  warningLevel = parseFloat(value);
}
}
function showwarning() {
  return warningLevel;
}

function warn() {
  return warnings;
}

function critics() {
  if(value!= ""){
  criticalevel = parseFloat(value);
}
}
function showcritical() {
  return criticalevel;
}

function critic() {
 return critics;
}
return{
  billy : BillSettings,
  //coll  : callings,
  //smes  : smsings,
tal   : totaling,
  up    : update,
  cost  : costings,
  warn  : warnings,
//criti   : critics,
//getup   : getupdate,
//getcos  : getcost,
//war     : warn,
crit    : critic,
checkcallcost :getCostCall,
checksmscost :getsmscost,
checktotalcost :gettotal,
checkwarning : showwarning,
checkcritical : showcritical
}
}
