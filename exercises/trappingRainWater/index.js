const trapBruteForce = (height) => {
    let total = 0

    for (let i = 1; i < height.length; i++) {
        let maxL = 0
        let maxR = 0
        
        for (let l = i - 1; l >= 0; l--) {
            if (height[l] > maxL) {
                maxL = height[l]
            }
        }

        for (let j = i + 1; j < height.length; j++) {
            if (height[j] > maxR) {
                maxR = height[j]
            }
        }

        let currentWater = Math.min(maxL, maxR) - height[i]

        if (currentWater > 0) {
            total += currentWater
        }
    }

    return total
} // time: O(n^2), space O(1)

// Two pointers technique
const trap = (height) => {
    let total = 0
    let maxL = 0
    let maxR = 0
    let p1 = 0
    let p2 = height.length - 1

    while (p1 < p2) {
        if (height[p1] <= height[p2]) {
            if (height[p1] > maxL) {
                maxL = height[p1]
            } else {
                total += maxL - height[p1]
            }
            p1++
        } else {
            if (height[p2] > maxR) {
                maxR = height[p2]
            } else {
                total += maxR - height[p2]
            }
            p2--
        }
    }

    return total
} // time: O(n), space O(1)

const height = [4,2,0,3,2,5]

console.log(trap(height))