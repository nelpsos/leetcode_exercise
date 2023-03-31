function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((account) => account.reduce((a, b) => a + b, 0))
  );
}
