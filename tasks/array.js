const reverse1 = (str) => {
    return str.split('').reverse().join('')
}

const reverse2 = (str) => {
    let reverse = ''

    for (let letter of str) {
        reverse = letter + reverse
    }

    return reverse
}

const mergeSortedArrays1 = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

const mergeSortedArrays2 = (arr1, arr2) => {
    const mergedArray = []
    let array1Item = arr1[0]
    let array2Item = arr2[0]

    let i = 1
    let j = 1
    while(array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = arr1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = arr2[j]
            j++
        }
    }

    return mergedArray
}
