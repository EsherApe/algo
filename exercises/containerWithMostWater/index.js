const nums = [1,8,6,2,5,7,4,8,3]
const nums1 = [1,1]

var maxArea = function(height) {
    let maxArea = 0

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let currentArea = Math.min(height[i], height[j]) * (j - i)
            maxArea = Math.max(maxArea, currentArea)
        }
    }

    return maxArea
} // time: O(n^2), space: O(1)

var maxArea2 = function(height) {
    let maxArea = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
        let currentArea = Math.min(height[i], height[j]) * (j - i)
        maxArea = Math.max(maxArea, currentArea)

        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }

    return maxArea
} // time: O(n), space: O(1)

console.log(maxArea2(nums))