// Import the Manager class from the '../lib/Manager' module
const Manager = require("../lib/Manager");
// Import the Employee class from the '../lib/Employee' module
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Alex", 1, "name@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Alex", 1, "name@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Alex", 1, "name@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
