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
        return 'FizzBuzz!';
    } else if (n % 3 == 0) {
        console.log(`${n} is Fizz`);
        return 'Fizz!';
    } else if (n % 5 == 0) {
        console.log(`${n} is Buzz`);
        return 'Buzz';
    } else {
        console.log(`${n} is not Fizz or Buzz`);
        return 'not Fizz or Buzz!';
    };
}

let whatIsIt = function (event) {

    event.preventDefault();

    let theNumber = numberInput.value;

    numberInput.value = '';

    let whatItIs = fizzBuzz(theNumber);

    resultBox.textContent = whatItIs;
}

let clearResult = function () {
    result.innerHTML = "";
}


button.addEventListener('click', whatIsIt);
numberInput.addEventListener('submit', whatIsIt);
resultBox.addEventListener('click', clearResult);