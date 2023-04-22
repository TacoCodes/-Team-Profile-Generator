// Import the Employee class from the '../lib/Employee' module
const Employee = require("../lib/Employee");
// Test if an instance of the Employee class can be created
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
// Test if the name can be set via the constructor arguments
test("Can set name via constructor arguments", () => {
  const name = "Mike";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
// Test if the id can be set via the constructor arguments
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Noor", testValue);
  expect(e.id).toBe(testValue);
});
// Test if the email can be set via the constructor arguments
test("Can set email via constructor argument", () => {
  const testValue = "name@gmail.com";
  const e = new Employee("Noor", 1, testValue);
  expect(e.email).toBe(testValue);
});
// Test if the name can be retrieved via the getName() method
test("Can get name via getName()", () => {
  const testValue = "Mike";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
// Test if the id can be retrieved via the getId() method
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Noor", testValue);
  expect(e.getId()).toBe(testValue);
});
// Test if the email can be retrieved via the getEmail() method
test("Can get email via getEmail()", () => {
  const testValue = "name@gmail.com";
  const e = new Employee("Noor", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Mike", 1, "name@gmail.com");
  expect(e.getRole()).toBe(testValue);
});
 
