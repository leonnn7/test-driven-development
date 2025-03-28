export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Negative duration is not allowed");
  }

  const rounded = Math.round(seconds);

  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;

  let result = "";
  if (h > 0) result += `${h}h`;
  if (m > 0) result += `${m}m`;
  if (s > 0 || result === "") result += `${s}s`;

  return result;
}
