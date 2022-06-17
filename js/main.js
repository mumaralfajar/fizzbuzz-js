/**
 * @param {number} n
 * @return {string[]}
 */

let numberInput = document.getElementById('number');
let button = document.getElementById('the-button');
let resultBox = document.getElementById('result');

let fizzBuzz = function (n) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log(`${n} is FizzBuzz`);
        return "It'\s FizzBuzz!";
    } else if (n % 3 == 0) {
        console.log(`${n} is Fizz`);
        return "It'\s Fizz!";
    } else if (n % 5 == 0) {
        console.log(`${n} is Buzz`);
        return "It'\s Buzz";
    } else {
        console.log(`${n} is not Fizz or Buzz`);
        return `${n} Is not Fizz or Buzz!`;
    };
}

let whatIsIt = function (event) {

    event.preventDefault();

    let theNumber = numberInput.value;

    numberInput.value = '';

    let whatItIs = fizzBuzz(theNumber);

    $("#result").fadeOut("slow", function () {
        $("#result").fadeIn("slow", function () { resultBox.textContent = whatItIs; });
    });
}

let clearResult = function () {

    $("#result").fadeOut("slow", function () {
        $("#result").fadeIn("slow", function () { result.innerHTML = "..."; });
    });
}

button.addEventListener('click', whatIsIt);
numberInput.addEventListener('submit', whatIsIt);
resultBox.addEventListener('click', clearResult);