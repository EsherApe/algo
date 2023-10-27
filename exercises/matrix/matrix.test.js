import { generateSpiralMatrix } from '.'

describe('generateSpiralMatrix', () => {
  it('should return a 1x1 matrix for n = 1', () => {
    expect(generateSpiralMatrix(1)).toEqual([[1]])
  })

  it('should return a 2x2 matrix for n = 2', () => {
    expect(generateSpiralMatrix(2)).toEqual([
      [1, 2],
      [4, 3],
    ])
  })

  it('should return a 3x3 matrix for n = 3', () => {
    expect(generateSpiralMatrix(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ])
  })

  it('should return a 4x4 matrix for n = 4', () => {
    expect(generateSpiralMatrix(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ])
  })

  it('should return a 5x5 matrix for n = 5', () => {
    expect(generateSpiralMatrix(5)).toEqual([
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ])
  })

  it('should handle n = 0 and return an empty matrix', () => {
    expect(generateSpiralMatrix(0)).toEqual([])
  })
})
