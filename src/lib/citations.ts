export function citationEnd(title: string): string {
  return /[.!?]$/.test(title.trimEnd()) ? "" : ".";
}
