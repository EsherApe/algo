import { palindrome } from './palindrome'

test('Empty string is a palindrome', () => {
    expect(palindrome('')).toBe(true)
})

test('Single character is a palindrome', () => {
    expect(palindrome('a')).toBe(true)
})

test('Non-palindrome word', () => {
    expect(palindrome('hello')).toBe(false)
})

test('Palindrome word (case-insensitive)', () => {
    expect(palindrome('racecar')).toBe(true)
})

test('Palindrome phrase with spaces and punctuation (case-insensitive)', () => {
    expect(palindrome('A man, a plan, a canal, Panama')).toBe(true)
})

test('Non-palindrome phrase with spaces and punctuation (case-insensitive)', () => {
    expect(palindrome('Not a palindrome')).toBe(false)
})
