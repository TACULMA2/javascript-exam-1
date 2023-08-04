import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  
    test("find: should return equal and over 18", () => {
      //GIVEN
      const ages = [16, 71, 21, 18];
  
      //WHEN
      const result = firstGrownUp(ages);
  
      //THEN
      expect(result).toBe(71, 21, 18);
    });

    test("find: should return orange", () => {
      //GIVEN
      const fruit = ['apple','banana','orange'];
  
      //WHEN
      const result = firstOrange(fruit);
  
      //THEN
      expect(result).toBe('orange');
    });

    test("find: should return length over 5 letters", () => {
      //GIVEN
      const names = ['luffy','zoro','chopper'];
  
      //WHEN
      const result = firstLengthOver5Name(names);
  
      //THEN
      expect(result).toBe('chopper');
    });
  
});
