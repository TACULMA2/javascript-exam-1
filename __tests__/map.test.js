import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  test("map: should return half of the numbers", () => {
    //GIVEN
    const numbers = [10, 20, 30, 40, 50];

    //WHEN
    const result = halfNumbers(numbers);

    //THEN
    expect(result).toEqual([5, 10, 15, 20, 25]);
  });

  test("map: should return Hello with names", () => {
    //GIVEN
    const names = ['Luffy','Zoro','Sanji'];

    //WHEN
    const result = spliceNames(names);

    //THEN
    expect(result).toEqual(['Hello Luffy', 'Hello Zoro', 'Hello Sanji']);
  });

  test("map: should return index plus a fruit", () => {
    //GIVEN
    const fruit = ['apple','banana','orange'];

    //WHEN
    const result = addSerialNumber(fruit);

    //THEN
    expect(result).toEqual(['1. apple', '2. banana', '3. orange']);
  });
});
