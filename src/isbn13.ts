export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) return false;

  const digits = isbn.split("").map(Number);
  const checkSum =
    digits
      .slice(0, 12)
      .reduce((sum, digit, i) => sum + digit * (i % 2 === 0 ? 1 : 3), 0);

  const checkDigit = (10 - (checkSum % 10)) % 10;

  return digits[12] === checkDigit;
}
