import { reverseInteger } from '.'

describe('reverseInteger', () => {
    it('should reverse a positive integer', () => {
        expect(reverseInteger(123)).toBe(321)
    })
  
    it('should reverse a negative integer', () => {
        expect(reverseInteger(-456)).toBe(-654)
    })
  
    it('should handle zero', () => {
        expect(reverseInteger(0)).toBe(0)
    })
  
    it('should reverse 500 to 5', () => {
        expect(reverseInteger(500)).toBe(5)
    })
  
    it('should reverse -90 to -9', () => {
        expect(reverseInteger(-90)).toBe(-9)
    })
  
    it('should reverse -500 to -5', () => {
        expect(reverseInteger(-500)).toBe(-5)
    })
})
  