//Employee constuctor
const Engineer = require("../lib/Engineer");
// creating engineer object
test("Can set GitHUb account via constructor", () => {
  const engineer = new Engineer(
    "Drinkwater",
    6,
    "yuptest@gmail.com",
    "Drinkwater06"
  );
  expect(engineer.github).toBe(testValue);
});
// gets github info
test("gets engineer github value", () => {
  const engineer = new Engineer(
    "Favour",
    65,
    "yeptest@gmail.com",
    "favour01216"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});
//Getrs role of employee
test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Mahrez",
    26,
    "Mahrez@mancity.com",
    "RiyadMahrez"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
