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

    if (totalIncome < 0 || isNaN(totalIncome)) {
        checkNegative(totalIncome, 'err-income');
    }
    if (foodCost < 0 || isNaN(foodCost)) {
        checkNegative(foodCost, 'err-food-cost');
    }
    if (rentCost < 0 || isNaN(rentCost)) {
        checkNegative(rentCost, 'err-rent-cost');
    }
    if (clothesCost < 0 || isNaN(clothesCost)) {
        checkNegative(clothesCost, 'err-clothes-cost');
    }

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
    const errMessage = document.getElementById('err-save-amount');

    if (balance != 0 && saveAmount != NaN) {
        let totalSaveAmount = balance * saveAmount / 100;
        depositSavingAmount.innerText = totalSaveAmount;
        remainingBalance.innerText = balance - totalSaveAmount;
    }

    checkNegative(saveAmount, 'err-save-amount');

    saveAmountInput.value = '';
})
/* End Saving Amount and Remaining Balance */

function checkNegative(data, inputId) {
    const errMessage = document.getElementById(inputId);
    try {
        if (data < 0) throw "Cannot give negative value";
        if (isNaN(data)) throw "Cannot give string value";

    } catch (err) {
        errMessage.innerText = err;
    }
}