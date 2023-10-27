import { pyramid } from '.'

describe('pyramid', () => {
  it('should print the correct number of rows', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    pyramid(3)
    expect(logSpy).toHaveBeenCalledTimes(3) // Three rows should be printed

    logSpy.mockClear()
  })

  it('should print the correct pyramid for n = 3', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    pyramid(3)
    expect(logSpy.mock.calls[0][0]).toBe('  #  ') // First row
    expect(logSpy.mock.calls[1][0]).toBe(' ### ') // Second row
    expect(logSpy.mock.calls[2][0]).toBe('#####') // Third row

    logSpy.mockClear()
  })

  it('should handle n = 1 and print a single #', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    pyramid(1)
    expect(logSpy).toHaveBeenCalledTimes(1) // One row should be printed
    expect(logSpy.mock.calls[0][0]).toBe('#') // Only one row with #

    logSpy.mockClear()
  })

  it('should handle n = 0 and not print anything', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    pyramid(0)
    expect(logSpy).toHaveBeenCalledTimes(0) // Nothing should be printed

    logSpy.mockClear()
  })
})
