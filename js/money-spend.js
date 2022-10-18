/* Total Expenses and Balance */
document.getElementById('calculate').addEventListener('click', function () {
    const income = document.getElementById('income');
    const totalIncome = parseFloat(income.value);
    const food = document.getElementById('food');
    const foodCost = parseFloat(food.value);
    const rent = document.getElementById('rent');
    const rentCost = parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesCost = parseFloat(clothes.value);
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    if (totalIncome && foodCost && rentCost && clothesCost != NaN) {
        let expenses = foodCost + rentCost + clothesCost;
        if (totalIncome >= expenses) {
            totalExpenses.innerText = expenses;
            balance.innerText = totalIncome - expenses;
        }
    }
    income.value = food.value = clothes.value = rent.value = '';
});
/* End Total Expenses and Balance */

/* Saving Amount and Remaining Balance */
document.getElementById('save-amount').addEventListener('click', function (e) {
    const saveAmountInput = document.getElementById('save-amount-input');
    const saveAmount = parseFloat(saveAmountInput.value);
    const balanceInput = document.getElementById('balance');
    const balance = parseFloat(balanceInput.innerText);
    const depositSavingAmount = document.getElementById('deposit-amount');
    const remainingBalance = document.getElementById('remaining-balance');

    if (balance != 0 && saveAmount != NaN) {
        let totalSaveAmount = balance * saveAmount / 100;
        depositSavingAmount.innerText = totalSaveAmount;
        remainingBalance.innerText = balance - totalSaveAmount;
    }
    saveAmountInput.value = '';
})
/* End Saving Amount and Remaining Balance */