import { capitalize } from '.'
  
describe('capitalize', () => {
    it('should capitalize the first letter of each word in a sentence', () => {
        expect(capitalize('hello world')).toBe('Hello World')
        expect(capitalize('the quick brown fox')).toBe('The Quick Brown Fox')
        expect(capitalize('capitalize every word')).toBe('Capitalize Every Word')
        expect(capitalize('capitalize, every word')).toBe('Capitalize, Every Word')
    })

    it('should handle an empty string', () => {
        expect(capitalize('')).toBe('')
    })

    it('should handle a single word', () => {
        expect(capitalize('apple')).toBe('Apple')
        expect(capitalize('banana')).toBe('Banana')
    })

    it('should preserve the capitalization of the first letter for already capitalized words', () => {
        expect(capitalize('Word')).toBe('Word')
        expect(capitalize('JavaScript')).toBe('JavaScript')
    })
})
  