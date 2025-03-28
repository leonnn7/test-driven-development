import { play } from "./rock-paper-scissors";

describe("play", () => {
  it("should return 1 when player1 wins with rock vs scissors", () => {
    expect(play("rock", "scissors")).toBe(1);
  });

  it("should return 2 when player2 wins with paper vs rock", () => {
    expect(play("rock", "paper")).toBe(2);
  });
  
  it("should return 0 when both players choose the same", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });
  
  it("should ignore case and whitespace", () => {
    expect(play(" Rock ", " SCISSORS ")).toBe(1);
  });
  
  it("should throw an error on invalid move", () => {
    expect(() => play("fire", "rock")).toThrow("Invalid move");
  });  
});
