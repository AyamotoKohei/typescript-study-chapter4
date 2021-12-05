function getFormattedValue(value: number, unit: string | null = null) {
  const _value = value.toFixed(1);
  if (unit === null) return `${_value}`;
  return `${_value} ${unit.toUpperCase()}`;
}

console.log(getFormattedValue(100, "pt"));
console.log(getFormattedValue(100, "kg"));
console.log(getFormattedValue(100));
