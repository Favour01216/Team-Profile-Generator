// Employee constructor
const Employee = require("../lib/Employee");
// creates employee object
test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof eemployee).toBe("object");
});

//get id from getId()
//for name
test("Testing name.", () => {
  const name = "James";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});
//for ID
test("gets employee ID", () => {
  const employee = new Employee("Favour", 60, "favouradesiyan2@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});
//for email
test("gets employee email", () => {
  const employee = new Employee("Favour", 60, "Favouradesiyan2@gmail.com");

  expect(employee.getemail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
//gets role of employee
test("Gets role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee(
    "Favour",
    65,
    "Favouradesiyan2@gmail.com"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
