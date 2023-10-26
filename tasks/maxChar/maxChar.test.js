import { maxChar } from '.'
  
describe('maxChar', () => {
    it('should return the most frequent character in a string', () => {
        expect(maxChar('hello')).toBe('l')
        expect(maxChar('apple')).toBe('p')
        expect(maxChar('banana')).toBe('a')
    })

    it('should handle empty strings', () => {
        expect(maxChar('')).toBe('')
    })

    it('should handle strings with only one character', () => {
        expect(maxChar('a')).toBe('a')
    })

    it('should return the first character in case of a tie', () => {
        expect(maxChar('abba')).toBe('a')
    })
})
  