
function fizzBuzz(phoneNumber) {
    let sum = 0;
    let n = phoneNumber.length;
    for (let i = 0; i < n; i++) {
        sum += Number(phoneNumber[i]);
    }
    let answer = ""
    for (let i = 1; i <= sum; i++) {
        if (i % 4 === 0 && i % 5 === 0) {
            answer += "FizzBuzz ";
        } else if (i % 4 === 0) {
            answer += "Fizz ";
        } else if (i % 5 === 0) {
            answer += "Buzz "
        } else {
            answer += `${i} `
        }
    }
    return answer;
}

const output = fizzBuzz("7488078433");

console.log(output);