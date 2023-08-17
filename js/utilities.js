function getInputFieldValueById (inputFieldId){
const newDepositOrWithdraw = document.getElementById(inputFieldId);
const newDepositOrWithdrawAmountString = newDepositOrWithdraw.value;
const newDepositOrWithdrawAmount = parseFloat(newDepositOrWithdrawAmountString);
newDepositOrWithdraw.value = "";
// if (isNaN(newDepositOrWithdrawAmount)){
//     alert("please give a valid number");
//    return;
// }
 return newDepositOrWithdrawAmount;
}
function getElementValueById (elementId){
    const total = document.getElementById(elementId);
    const totalAmountString = total.innerText;
    const totalAmount = parseFloat(totalAmountString);
    return totalAmount;
}
function setInnerText (elementId, value){
    const element = document.getElementById(elementId);
     element.innerText = value;
}