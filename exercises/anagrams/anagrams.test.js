import { areAnagrams } from '.'

describe('areAnagrams', () => {
    it('should return true for anagrams', () => {
        expect(areAnagrams('listen', 'silent')).toBe(true)
        expect(areAnagrams('heart', 'earth')).toBe(true)
        expect(areAnagrams('debit card', 'bad credit')).toBe(true)
    })

    it('should return false for non-anagrams', () => {
        expect(areAnagrams('hello', 'world')).toBe(false)
        expect(areAnagrams('apple', 'banana')).toBe(false)
        expect(areAnagrams('anagram', 'manga')).toBe(false)
    })

    it('should be case-insensitive', () => {
        expect(areAnagrams('Listen', 'silent')).toBe(true)
        expect(areAnagrams('Race', 'care')).toBe(true)
    })

    it('should handle spaces', () => {
        expect(areAnagrams('dormitory', 'dirty room')).toBe(true)
        expect(areAnagrams('school master', 'the classroom')).toBe(true)
    })

    it('should handle different lengths', () => {
        expect(areAnagrams('silent', 'silently')).toBe(false)
    })
})
  