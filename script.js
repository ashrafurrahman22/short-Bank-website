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
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

// fourth-function
function getInnerTextValue(field){
    const fieldTag = document.getElementById(field);
    const fieldValueInText = fieldTag.innerText;
    const fieldValue = parseFloat(fieldValueInText);
    return fieldValue; 
}


// third function
function updateBalance(amount, isAdd){
    
    const previousBalance = getInnerTextValue('balance-total');

    // use if else with let variable
    let newBalance;
    if(isAdd == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
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
    const balance = getInnerTextValue('balance-total')
    if(amount > 0 && amount <= balance ){
        updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
    }
});