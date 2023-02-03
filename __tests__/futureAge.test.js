import FutureAge from "../src/js/futureAge";

describe('FutureAge', () => {

test("should calculate mercury time", () => {
  const futureAge = new FutureAge (42, 56);
  expect(futureAge.mercuryTime).toEqual(58);
});

test("should calculate venus time", () => {
  const futureAge = new FutureAge (42, 56);
  expect(futureAge.venusTime).toEqual(23);
});

});