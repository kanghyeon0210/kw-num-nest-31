function avg(numbers) {
    let sum = numbers.reduce((prev, curr) => prev + curr, 0);
    return sum / numbers.length;
  }
  
  function prime(num) {
    if (num <= 1) return false; // 1 이하의 숫자는 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // 약수가 있으면 소수가 아님
    }
    return true; // 소수임
  }
  
  function factorial(num) {
    if (num < 0) return -1; // 음수인 경우 -1 반환
    if (num === 0) return 1; // 0! = 1
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  module.exports = {
    avg,
    prime,
    factorial
  };
  