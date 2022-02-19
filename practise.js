// first function 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    // clean the input field 
    inputField.value = '';
    return inputAmount;
}

// second function 
function updateTotalField(fieldId, amount){
    const totalField = document.getElementById(fieldId);
    const totalAmountText = totalField.innerText;
    const totalAmount = parseFloat(totalAmountText);

    const newTotal = totalAmount + amount;
    totalField.innerText = newTotal
}

// fourth function 
function getInnerTextValue(field){
    const balancefield = document.getElementById(field);
    const balancefieldText = balancefield.innerText;
    const balanceField = parseFloat(balancefieldText);

    return balanceField;
}

// third function 
function updateBalanceField(amount, isAdd){

    const previousBalance  = getInnerTextValue('balance-total')

    let newBalanceAmount;
    if(isAdd == true){
        newBalanceAmount = previousBalance + amount;
    }
    else{
        newBalanceAmount = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalanceAmount;
}

// deposit button event hadnler
document.getElementById('deposit-button').addEventListener('click', function (){
    const amount = getInputValue('deposit-input')
    updateTotalField('deposit-total', amount);
    updateBalanceField(amount, true);

    

});


// withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function(){

    const amount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', amount);
    updateBalanceField(amount, false);
});