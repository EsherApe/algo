import { fizzBuzz } from '.'

describe('fizzBuzz', () => {
    it('should return an array of values from 1 to n', () => {
      expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz'])
      expect(fizzBuzz(10)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'])
    })
  
    it('should handle the number 0', () => {
      expect(fizzBuzz(0)).toEqual([])
    })
  
    it('should return the number itself for other numbers', () => {
      expect(fizzBuzz(7)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7])
      expect(fizzBuzz(8)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8])
    })
  })