// Import the Intern class from the '../lib/Intern' module
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UOA";
  const e = new Intern("Sam", 1, "name@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Sam", 1, "name@gmail.com", "UOA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UOA";
  const e = new Intern("Sam", 1, "name@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});