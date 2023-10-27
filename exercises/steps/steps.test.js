import { steps } from '.'

describe('steps', () => {
  it('should print the correct number of steps', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    steps(3);
    expect(logSpy).toHaveBeenCalledTimes(3); // Three lines should be printed

    logSpy.mockClear();
  });

  it('should print the correct steps for n = 3', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    steps(3);
    expect(logSpy.mock.calls[0][0]).toBe('#  '); // First line should be "#  "
    expect(logSpy.mock.calls[1][0]).toBe('## '); // Second line should be "## "
    expect(logSpy.mock.calls[2][0]).toBe('###'); // Third line should be "###"

    logSpy.mockClear();
  });

  it('should handle n = 0 and not print anything', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    steps(0);
    expect(logSpy).toHaveBeenCalledTimes(0); // Nothing should be printed

    logSpy.mockClear();
  });
});
