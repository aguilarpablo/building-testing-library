export function sum(numbers: number[]): number {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
}

export function average(numbers: number[]): number {
    return sum(numbers) / numbers.length;
}