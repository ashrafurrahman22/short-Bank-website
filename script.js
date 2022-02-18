// first function 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);

    // clean the input field 
    inputField.value = '';
    return value;
}

// second function
function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);

    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}

// third function
function updateBalance(amount, isAdd){
    const balanceTag = document.getElementById('balance-total');
    const previousBalanceText = balanceTag.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    // use if else with let variable
    let newBalance;
    if(isAdd == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;


    // use if else with const variable 
   /*  if(isAdd == true){
        const newDepositBalance = previousBalance + amount;
    balanceTag.innerText = newDepositBalance;
    }
    else{
        const newWithdrawBalance = previousBalance - amount;
    balanceTag.innerText = newWithdrawBalance;
    } */
}



// event handler for deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
   if(amount > 0 ){
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
   }
});


// event handler for withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    if(amount > 0 ){
        updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
    }
});