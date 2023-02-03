import AgeSpace from "../src/js/ageSpace";

describe('AgeSpace', () => {

  test("should create an object with an age property for ageSpace", () => {
    const ageSpace = new AgeSpace(42);
    expect(ageSpace.age).toEqual(42);
  });

  test("should calculate Mercury years passed", () => {
  const ageSpace = new AgeSpace(42);
  expect(ageSpace.mercury).toEqual(175);
  });

})
