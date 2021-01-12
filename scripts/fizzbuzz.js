fizzBuzz = function (number) {
    if (number % 3 === 0 && number % 5 === 0 && typeof(number) === "number") {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else if (typeof(number) === "number") {
        return number;
    } else {
        return "Please select a valid number!";
    }
}