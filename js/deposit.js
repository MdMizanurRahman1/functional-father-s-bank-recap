// step-1 add event listener to the deposit button
//step-2 get deposit amount from deposit input
//step-2.5-convert string deposit amount to a number type
//step-3 clear deposit field
//step-4 get the previous deposit total
//step-5 calculate the new deposit and set the value to deposit field
//step-6 get current balance
//step-7 calculate the total deposit with the balance



//s-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    //s-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //s-3
    depositField.value = '';
    //s-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //s-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    //step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    //step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})