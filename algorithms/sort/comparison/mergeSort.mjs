// Time complexity O(n * log(n))
// Space complexity O(n)

const numbers = [99,44,6,2,1,5,63,87,283,4,0]

const merge = (left, right) => {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    const res = [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]

    return res
}

const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr
    }

    let middleIndex = Math.floor(arr.length / 2)
    let left = arr.slice(0, middleIndex)
    let right = arr.slice(middleIndex)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

console.log(mergeSort(numbers))