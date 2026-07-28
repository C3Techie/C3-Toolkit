export function validateInput(raw: string): string | null {
  if (raw.trim() === "") return "Please enter a value.";
  const n = Number(raw);
  if (isNaN(n)) return "Enter a valid number.";
  if (!isFinite(n)) return "Value must be finite.";
  return null;
}

export function isValidInput(raw: string): boolean {
  return validateInput(raw) === null;
}
