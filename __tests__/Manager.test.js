// using Manager constructor
const Manager = require("../lib/Manager");
test("creates an Manager object", () => {
  const manager = new Manager("Dan", 10, "Dan.yup@gmail.com", 3);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("elsa", 60, "elsa500@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
