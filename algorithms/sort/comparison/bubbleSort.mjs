// Time complexity O(n^2)
// Space complexity O(n)

const numbers = [99,44,6,2,1,5,63,87,283,4,0]

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]

                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
 
}

console.log(bubbleSort(numbers))