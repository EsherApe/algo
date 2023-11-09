const findMoreRepeatable = (arr) => {
    const map = {}
    let mostRepeated = null
    let maxCount = 0

    for (let char of arr) {
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char]++
        }

        if (map[char] > maxCount) {
            mostRepeated = char
            maxCount = map[char]
        }
    }

    return mostRepeated
}

const arr1 = ['a', 'b', 'c', 'a', 'd', 'e', 'c', 'b', 'a', 'a'] // a
const arr2 = ['a', 'b', 'c', 'a', 'd', 'e', 'c', 'b', 'c'] // c

findMoreRepeatable(arr1)
findMoreRepeatable(arr2)


const findNonDuplicates = (str) => {
    const map = {}

    for (let char of str) {
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char]++
        }
    }

    for (const char of str) {
        if (map[char] === 1) {
            return char
        }
    }

    // If no character has a count of 1, return null
    return null
}

const input1 = 'aabbccddeeff' // Expected output: 'null' (all characters are repeated)
const input2 = 'abcdefg' // Expected output: 'a' (a is the first character without duplicates)
const input3 = 'abacabad' // Expected output: 'c' (c is the first character without duplicates)

findNonDuplicates(input1)
findNonDuplicates(input2)
findNonDuplicates(input3)

// TODO finish this task
const denominations = [
    [100, 5],
    [50, 10],
    [10, 20],
    [5, 30]
]

const createAtm = (denominations) => {
    const bank = denominations

    return (cash) => {
        const cashWithdraw = {
            amount: 0,
            balance: 0
        }

        if (cash % 5 !== 0) {
            console.log('Don\'t have needed denominals')
            return cashWithdraw
        }
    
        for (let cell of bank) {
            cashWithdraw.balance += cell[0] * cell[1]
        }
    
        if (cashWithdraw.balance < cash) {
            console.log('Not enough money')
            return cashWithdraw
        }
    
        for (let cell of bank) {
            while(cell[1]) {
                if (cashWithdraw.amount === cash) {
                    return cashWithdraw
                }
    
                if (cell[1] && cell[1] <= cash) {
                    cashWithdraw[cell[0]] ? cashWithdraw[cell[0]]++ : cashWithdraw[cell[0]] = 1
                    cashWithdraw.amount += cell[0]
                    cashWithdraw.balance -= cell[0]
                    cell[1] -= 1
                }
            }
        }

        return cashWithdraw
    }
}

const withdrawCash = createAtm(denominations)

const sum = (num) => {
    if (num === 1) {
        return 1
    }

    return sum(num - 1) + num
}
