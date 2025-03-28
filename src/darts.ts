export function possibleCheckout(score: number): string | null {
  const remaining = 501 - score;
  if (remaining <= 0 || remaining % 2 !== 0) return null;

  const double = remaining / 2;
  if (double > 20) return null;

  return `Double ${double}`;
}
