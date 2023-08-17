document.getElementById("depositButton").addEventListener("click", function(){
    const newDepositAmount = getInputFieldValueById("deposit");
    if(isNaN(newDepositAmount)){
        alert("please give a valid number");
        return;
    }
    if(newDepositAmount < 0){
        alert("please give a positive number");
        return;
    }
    let depositTotalAmount = getElementValueById("depositTotal");
    depositTotalAmount += newDepositAmount;
    setInnerText("depositTotal", depositTotalAmount);
    let  balanceTotalAmount = getElementValueById("balanceTotal");
    balanceTotalAmount += newDepositAmount;
    setInnerText("balanceTotal", balanceTotalAmount);
})