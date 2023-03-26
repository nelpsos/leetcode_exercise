function average(salary: number[]): number {
  return (
    (salary.reduce((a, b) => a + b, 0) -
      Math.max(...salary) -
      Math.min(...salary)) /
    (salary.length - 2)
  );
}
