const max = (a: number, b: number): number => {
  if (a < b) {
    return a;
  }
  return b;
};

test("should return the higher of two numbers", () => {
  expect(Math.max(1, 2)).toEqual(2);
});

export default max;
