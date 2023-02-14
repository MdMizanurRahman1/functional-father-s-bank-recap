/*
step-1-get the button and add event listner
step-2 - get the withdraw amount
step-3- clear the withdraw input field
step-4-get previous withdraw total
step-5-calculate the total amount and set the amount to the deposit text area
step-6-get previous balance
step-7-deduct the deposit value from previous balance


*/
//s-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //s-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //s-3
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('please input a valid number');
        return;
    }



    //s-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //s-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You do not have that much money in your balance');
        return;
    }

    //step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    //s-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;


})