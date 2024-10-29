export function useFormattedDate(_date: string) {
  const date = new Date(_date);
  const month = date.getUTCMonth().toString().padStart(2, "0");
  const monthDate = date.getUTCDate().toString().padStart(2, "0");
  return `${date.getUTCFullYear()}-${month}-${monthDate}`;
}
