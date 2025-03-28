import { formatDuration } from "./duration";

describe("formatDuration", () => {
  it("should return '33s' for 33 seconds", () => {
    expect(formatDuration(33)).toBe("33s");
  });

  it("should return '2m3s' for 123 seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });
  
  it("should return '8m20s' for 500 seconds", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });
  
  it("should return '1h' for 3600 seconds", () => {
    expect(formatDuration(3600)).toBe("1h");
  });  

  it("should return '1h6m39s' for 3999 seconds", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });  

  it("should return '0s' for 0 seconds", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  
  it("should throw an error for negative input", () => {
    expect(() => formatDuration(-5)).toThrow("Negative duration is not allowed");
  });
  
  it("should round seconds correctly", () => {
    expect(formatDuration(59.6)).toBe("1m");
  });  
});
