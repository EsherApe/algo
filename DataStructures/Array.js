//  insert O(n)
//  lookup O(1)
//  delete O(n)
//  append O(1)

class NewArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const last = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--

        return last
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        this.pop()
        return item
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
    }
}

const newArray = new NewArray()
newArray.push('Hello')
newArray.push('World')
newArray.push('!')
newArray.delete(1)
console.log(newArray)