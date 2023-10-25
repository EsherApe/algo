import { reverse1, reverse2, reverse3, reverse4 } from './reverseString'

describe('String Reversal Implementations', () => {
  const implementations = [
    { name: 'Implementation 1', func: reverse1 },
    { name: 'Implementation 2', func: reverse2 },
    { name: 'Implementation 3', func: reverse3 },
    { name: 'Implementation 4', func: reverse4 },
  ];

  implementations.forEach((impl) => {
    test(`${impl.name} - Reverse a simple string`, () => {
      expect(impl.func('hello')).toBe('olleh');
    });

    test(`${impl.name} - Reverse an empty string`, () => {
      expect(impl.func('')).toBe('');
    });

    test(`${impl.name} - Reverse a string with special characters`, () => {
      expect(impl.func('123$%')).toBe('%$321');
    });

    test(`${impl.name} - Reverse a long string`, () => {
      expect(impl.func('This is a long string to test')).toBe('tset ot gnirts gnol a si sihT');
    });
  });
});
