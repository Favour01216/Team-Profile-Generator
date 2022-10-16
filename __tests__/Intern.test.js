// using Intern constructor
const Intern = require("../lib/Intern");

// creating intern object
test("creates an Intern object", () => {
  const intern = new Intern("Messi", 10, "lionel.messi@gmail.com", "UofT");

  expect(intern.school).toEqual(expect.any(String));
});

// gets school of employee
test("gets employee school", () => {
  const intern = new Intern("Lewa", 7, "lewa@gmail.com", "STFX");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// gets role of employee
test("gets role of employee", () => {
  const intern = new Intern("salah", 10, "mo.salah@gmail.com", "MUN");

  expect(intern.getRole()).toEqual("Intern");
});
