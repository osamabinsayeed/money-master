//input values
let incomeText = document.getElementById('incomeInput');
let foodText = document.getElementById('foodInput');
let rentText = document.getElementById('rentInput');
let clothsText = document.getElementById('clothsInput');
let saveText = document.getElementById('save-input');




//input number
function inputNumber(input) {
    let amount = parseFloat(input);
    return amount;
}


//calculaation
document.getElementById('calculateButton').addEventListener('click', function () {
    let income = inputNumber(incomeText.value);

    let foodExpences = inputNumber(foodText.value);
    let rentExpences = inputNumber(rentText.value);
    let clothsExpences = inputNumber(clothsText.value);
    let totalExpences = foodExpences + rentExpences + clothsExpences;
    let balance = income - totalExpences;
    document.getElementById('total-expences').innerText = totalExpences;
    document.getElementById('balance').innerText = balance;



})
document.getElementById('save-button').addEventListener('click', function () {
    let income = inputNumber(incomeText.value);
    let foodExpences = inputNumber(foodText.value);
    let rentExpences = inputNumber(rentText.value);
    let clothsExpences = inputNumber(clothsText.value);
    let totalExpences = foodExpences + rentExpences + clothsExpences;
    let balance = income - totalExpences;
    let savingPercentage = inputNumber(saveText.value);
    let percentage = savingPercentage / 100;
    let savingAmount = income * percentage;
    let remainingBanlance = balance - savingAmount;
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBanlance;
})



