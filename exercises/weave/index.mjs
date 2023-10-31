import Queue from '../../dataStructures/Queue.mjs'

const queueOne = new Queue()
queueOne.enqueue(1)
queueOne.enqueue(2)

const queueTwo = new Queue()
queueTwo.enqueue('Hi')
queueTwo.enqueue('There')

// use enqueue, dequeue and peak methods only
const weave = (sourceOne, sourceTwo) => {
    const queue = new Queue()

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            queue.enqueue(sourceOne.dequeue())
        }

        if (sourceTwo.peek()) {
            queue.enqueue(sourceTwo.dequeue())
        }
    }

    return queue
}

// Queue(1, Hi, 2, There)
console.log(weave(queueOne, queueTwo))