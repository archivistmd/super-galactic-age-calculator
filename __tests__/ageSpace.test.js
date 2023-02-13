import AgeSpace from "../src/js/ageSpace";

describe('AgeSpace', () => {

  test("should create an object with an age property for ageSpace", () => {
    const ageSpace = new AgeSpace(42);
    expect(ageSpace.age).toEqual(42);
  });

  test("should return 0 if age is 0", () => {
    const ageSpace = new AgeSpace(0);
    expect(ageSpace.planetAge()).toEqual(0);
  });

  test("should return 42 if age is 42", () => {
    const ageSpace = new AgeSpace(42);
    expect(ageSpace.planetAge()).toEqual(42);
  });

  // test("should calculate Mercury years passed", () => {
  // const ageSpace = new AgeSpace(42, "mercury");
  // expect(ageSpace.planetAge()).toEqual(175);
  // });

  // test("should calculate Venus years passed", () => {
  //   const ageSpace = new AgeSpace (42, "venus");
  //   expect(ageSpace.planetAge()).toEqual(63);
  // });

  // test("should calculate earth years passed", () => {
  //   const ageSpace = new AgeSpace (42, "earth");
  //   expect(ageSpace.planetAge()).toEqual(42);
  // });

  // test("should calculate Mars years passed", () => {
  //   const ageSpace = new AgeSpace (42, "mars");
  //   expect(ageSpace.planetAge()).toEqual(79);
  // });

  // test("should calculate Jupiter years passed", () => {
  //   const ageSpace = new AgeSpace (42, "jupiter");
  //   expect(ageSpace.planetAge()).toEqual(498);
  // });
})
