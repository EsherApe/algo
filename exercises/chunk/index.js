export const arrayChunk = (arr, size) => {
    if (size === 0) {
        return []
    }

    if (size < 0 || arr.length < size) {
        return arr
    }

    const chunked = []

    if (arr.length) {
        for (let i = 0; i < arr.length; i+=size) {
            const chunk = arr.slice(i, i+size)

            chunked.push(chunk)
        }
    }

    return chunked
}

// [1,2,3,4,5], 2

export const arrayChunk2 = (arr, size) => {
    const chunked = []

    for (let element of arr) {
        const last = chunked[chunked.length - 1]

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }

    return chunked
}
