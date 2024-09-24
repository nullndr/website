export function useFormattedDate(_date: string) {
  const date = new Date(_date)
  return `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDate()}`
}
