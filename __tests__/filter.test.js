import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    // Please add test cases here
    test("filter: should return even numbers", () => {
        //GIVEN
        const numbers = [2, 9, 1, 13, 8];
    
        //WHEN
        const result = filterEvenNumbers(numbers);
    
        //THEN
        expect(result).toEqual([2, 8]);
      });
  
      test("filter: should return length with 4", () => {
        //GIVEN
        const word = ['i','am','cute'];
    
        //WHEN
        const result = filterLengthWith4(word);
    
        //THEN
        expect(result).toEqual(['cute']);
      });
  
      test("filter: should return letters start with A", () => {
        //GIVEN
        const letters = ['apple','banana','orange', 'artichoke'];
    
        //WHEN
        const result = filterStartWithA(letters);
    
        //THEN
        expect(result).toEqual(['apple', 'artichoke']);
      });
});