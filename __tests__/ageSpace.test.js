import ageSpace from "../src/js/ageSpace";

describe('ageSpace', () => {

  test("should create an object with an age property for ageSpace", () => {
    const spaceage = new spaceage(42);
    expect(spaceage.age).toEqual(42);
  });

})
