//Employee constuctor
const Engineer = require("../lib/Engineer");
// creating engineer object
test("Can create a github.", () => {
  const testGithub = "JamesLJenks";
  const employeeInstance = new Engineer(
    "James",
    2,
    "jamesljenks@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
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
