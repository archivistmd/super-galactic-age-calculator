import AgeSpace from "../src/js/ageSpace";

describe('AgeSpace', () => {

  test("should create an object with an age property for ageSpace", () => {
    const ageSpace = new AgeSpace(42);
    expect(ageSpace.age).toEqual(42);
  });

  test("should calculate Mercury years passed", () => {
  const ageSpace = new AgeSpace(42, "mercury");
  expect(ageSpace.planetAge()).toEqual(175);
  });

  test("should calculate Venus years passed", () => {
    const ageSpace = new AgeSpace (42, "venus");
    expect(ageSpace.planetAge()).toEqual(63);
  });

  test("should calculate earth years passed", () => {
    const ageSpace = new AgeSpace (42, "earth");
    expect(ageSpace.planetAge()).toEqual(42);
  });

  test("should calculate Mars years passed", () => {
    const ageSpace = new AgeSpace (42, "mars");
    expect(ageSpace.planetAge()).toEqual(79);
  });

  test("should calculate Jupiter years passed", () => {
    const ageSpace = new AgeSpace (42, "jupiter");
    expect(ageSpace.planetAge()).toEqual(498);
  });

  test("should calculate how many years till next birthday", () => {
    const ageSpace = new AgeSpace (42, "earth");
    expect(ageSpace.futureAge()).toEqual(14);
  });
})
