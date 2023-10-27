import { arrayChunk } from './index'
  
describe('arrayChunk', () => {
    it('should chunk an array into smaller arrays of the specified size', () => {
        expect(arrayChunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
        expect(arrayChunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]])
        expect(arrayChunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]])
        expect(arrayChunk([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7]])
    })

    it('should handle an empty array', () => {
        expect(arrayChunk([], 3)).toEqual([])
    })

    it('should handle negative size by returning the original array', () => {
        expect(arrayChunk([1, 2, 3, 4, 5], -2)).toEqual([1, 2, 3, 4, 5])
    })

    it('should handle size 0 by returning an empty array', () => {
        expect(arrayChunk([1, 2, 3, 4, 5], 0)).toEqual([])
    })

    it('should handle size larger than the array length by returning the original array', () => {
        expect(arrayChunk([1, 2, 3], 5)).toEqual([1, 2, 3])
    })
})
