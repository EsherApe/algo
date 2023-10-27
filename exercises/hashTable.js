const arr1 = [2,5,5,2,3,5,1,2,4]
const arr2 = [2,1,1,2,3,5,1,2,4]
const arr3 = [2,3,4,5]

const firstReccuringNum = (arr) => {
    const map = {}

    for (let num of arr) {
        if (map[num]) {
            return num
        } else {
            map[num] = true
        }
    }

    return undefined
} // O(n)

console.log(firstReccuringNum(arr1))
console.log(firstReccuringNum(arr2))
console.log(firstReccuringNum(arr3))