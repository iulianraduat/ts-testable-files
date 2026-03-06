// 1. Function with no arguments
export function doNothing(): void {}

// 2. Function with one primary argument (boolean example)
export function boolToString(bool: boolean): string {
  return bool ? 'true' : 'false';
}

// 3. Function with one object argument
export interface Department {
  name: string; // "" or "text"
  numEmployees: number; // NaN, -1, 0, 1
}

export function isValid(dep: Department): dep is Department {
  const { name, numEmployees } = dep;
  if (!name) return false;
  if (isNaN(numEmployees) || numEmployees < 0) return false;
  return true;
}

// 4. Function with three optional arguments
export function threeOptional(
  validate?: boolean, // true | false | undefined
  numDays?: number, // 0 | 10 | undefined
  date?: Date, // invalid | valid | undefined
): Date | undefined {
  if (validate) {
    if (numDays === undefined) return undefined;
    if (!date || isNaN(date.getTime())) return undefined;
  }

  const newDate = new Date(date!);
  newDate.setDate(newDate.getDate() + numDays!);
  return new Date();
}
