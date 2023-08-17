document.getElementById("withdrawButton").addEventListener("click", function(){
    const newWithdrawAmount = getInputFieldValueById("withdraw");
    if(isNaN(newWithdrawAmount)){
        alert("please give a valid number");
        return;
    }
    if(newWithdrawAmount < 0){
        alert("please give a positive number");
        return;
    }
    let withdrawTotalAmount = getElementValueById("withdrawTotal");
    setInnerText("withdrawTotal", withdrawTotalAmount);
    let balanceTotalAmount = getElementValueById("balanceTotal");
    if(newWithdrawAmount > balanceTotalAmount){
        alert("you can't withdraw more than your balance");
        return;
    }
    withdrawTotalAmount += newWithdrawAmount;
    balanceTotalAmount -= newWithdrawAmount;
    setInnerText("balanceTotal", balanceTotalAmount);
})