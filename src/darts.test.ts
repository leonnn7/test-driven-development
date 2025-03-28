import { possibleCheckout } from "./darts";

describe("possibleCheckout", () => {
  it("should return 'Double 12' for score 477", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
  });

  it("should return null if remaining points are odd (e.g. 480)", () => {
    expect(possibleCheckout(480)).toBeNull();
  });

  it("should return null if double checkout value is > 20 (e.g. 441)", () => {
    expect(possibleCheckout(441)).toBeNull();
  });
});
