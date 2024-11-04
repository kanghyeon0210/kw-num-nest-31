const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
expect(lib.avg([-5, 5])).toBe(0);
});

// prime 함수 테스트
test('prime function should return true for a prime number', () => {
  expect(lib.prime(7)).toBe(true);  // 7은 소수이므로 true 반환 기대
});

test('prime function should return false for a non-prime number', () => {
  expect(lib.prime(10)).toBe(false);  // 10은 소수가 아니므로 false 반환 기대
});

// factorial 함수 테스트
test('factorial function should return 120 for input 5', () => {
  expect(lib.factorial(5)).toBe(120);  // 5! = 120
});

test('factorial function should return 1 for input 0', () => {
  expect(lib.factorial(0)).toBe(1);  // 0! = 1
});
