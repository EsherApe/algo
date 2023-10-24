// Time complexity O(n^2)
// Space complexity O(1)
// For lists which almost sorted

const numbers = [99,44,6,2,1,5,63,87,283,4,0]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let elementToInsert = arr[i]

        let j = i - 1
        while (j >= 0 && elementToInsert < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = elementToInsert
    }

    return arr
}

console.log(insertionSort(numbers))