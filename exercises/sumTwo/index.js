const array = [3, 5, 2, 4, 8, 9]

// brute force solution
const sumTwo = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let numToFind = target - current

        for (let j = i + 1; j < arr.length; j++) {
            if (numToFind === arr[j]) {
                return [i, j]
            }
        }
    }

    return null
} // O(n^2)

const sumTwo2 = (arr, target) => {
    let store = {}

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let numToFind = target - current

        if (current in store) {
            return [store[current], i]
        }

        store[numToFind] = i
    }

    return null
} // O(n)

console.log(sumTwo2(array, 11))