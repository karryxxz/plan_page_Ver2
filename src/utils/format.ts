export function formatPV(pv: number): string {
  return pv >= 10000 ? `${pv / 10000}万` : pv.toLocaleString();
}