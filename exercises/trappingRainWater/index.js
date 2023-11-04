const height = [4,2,0,3,2,5]

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
}

console.log(trap(height))