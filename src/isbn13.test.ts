import { isValid } from "./isbn13";

describe("isValid", () => {
  it("should return true for a valid ISBN-13", () => {
    expect(isValid("9780306406157")).toBe(true);
  });
});
