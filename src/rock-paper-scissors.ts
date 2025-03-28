export function play(p1: string, p2: string): number {
  const normalize = (s: string) => s.trim().toLowerCase();
  const moves = ["rock", "paper", "scissors"];
  const a = normalize(p1);
  const b = normalize(p2);

  if (!moves.includes(a) || !moves.includes(b)) {
    throw new Error("Invalid move");
  }

  if (a === b) return 0;

  if (
    (a === "rock" && b === "scissors") ||
    (a === "scissors" && b === "paper") ||
    (a === "paper" && b === "rock")
  ) {
    return 1;
  }

  return 2;
}
