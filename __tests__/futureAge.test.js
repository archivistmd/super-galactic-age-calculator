import FutureAge from "../src/js/futureAge";

describe('FutureAge', () => {
test("should calculate mercury time", () => {
  const futureAge = new FutureAge (42, 56);
  expect(futureAge.mercuryTime).toEqual(58);
});
});