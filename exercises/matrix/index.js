const generateSpiralMatrix = (n) => {
    const matrix = []
    let currentValue = 1

    let startRow = 0
    let endRow = n - 1
    let startColumn = 0
    let endColumn = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = currentValue
            currentValue++
        }

        startRow++

        // Right column
        matrix[endColumn] = []
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = currentValue
            // check
            currentValue++
        }

        startRow--

        // TODO
    }

    console.log(matrix)
    return matrix
}

generateSpiralMatrix(3)

