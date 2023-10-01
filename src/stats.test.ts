import {average, sum} from "./stats";
import {expect, test} from "./testLib";

let result: number, expected: number;

test("calculates the sum of all elements of the array", () => {
    result = sum([1, 2, 3]);
    expected = 6;
    expect(expected).toBe(result);
})

test("calculates the average of all elements of the array", () => {
    result = average([1, 2, 3]);
    expected = 2;
    expect(expected).toBe(result);
})
