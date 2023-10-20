// Factorial

const factorialIterative = (num) => {
    let total = 1

    if (number === 2) {
        total = 2
    }

    for (let i = 2; i <= num; i++) {
        total *= i
    }

    return total
} // O(n)

const factorialRecursive = (num) => {
    if (num === 1) {
        return 1
    }

    return num * factorialRecursive(num - 1)
} // O(n)

// Fibonaci
const fibonacciIterative = (n) => {
    // first two steps return n
    if (n < 2) {
        return n
    }

    let total = 0
    // value of third and fourth elements
    let a = 1
    let b = 2

    // start from step 3
    for (let i = 3; i < n; i++) {
        total = a + b
        a = b
        b = total
    }

    return total
} // O(n)

const fibonacciIterativeArray = (n) => {
    let arr = [0, 1]

    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
 
    return arr[n]
 
} // O(n)

const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
} // O(2^n)
