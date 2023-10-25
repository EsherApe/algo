// lookup O(log n)
// insert O(log n)
// delete O(log n)

import { 
    breadthFirstSearch,
    breadthFirstSearchRecursive
} from '../algorithms/search/breadthFirstSearch(BFS).mjs'
import { 
    depthFirstSearchInOrder,
    depthFirstSearchPostOrder,
    depthFirstSearchPreOrder
} from '../algorithms/search/depthFirstSearch(DFS).mjs'

import Node from './NodeBinaryTree.mjs'

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
            return this
        }

        let currentNode = this.root

        while(true) {
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    return this
                }
    
                currentNode = currentNode.left
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return this
                }
    
                currentNode = currentNode.right
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return null
        }

        let currentNode = this.root

        while (true) {
            if (currentNode === null) {
                return null
            }

            if (currentNode.value === value) {
                return currentNode
            }
    
            if (currentNode.value > value) {
                currentNode = currentNode.left 
            } else { 
                currentNode = currentNode.right
            }
        }
    }

    remove(value) {
        if (!this.root) {
            return false
        }

        let currentNode = this.root
        let parentNode = null

        while(currentNode) {
            if (currentNode.value > value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (currentNode.value < value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value === value) {

                // No right child
                if(currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }

                // Right child which doesn't have a left child
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        currentNode.right.left = currentNode.left

                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }

                // Right child that has a left child
                } else {

                    // Find the Right child's left most child
                    let leftmost = currentNode.right.left
                    let leftmostParent = currentNode.right

                    while (leftmost.left !== null) {
                        leftmostParent = leftmost
                        leftmost = leftmost.left
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right
                    leftmost.left = currentNode.left
                    leftmost.right = currentNode.right

                    if (parentNode === null) {
                        this.root = leftmost
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost
                        }
                    }
                }

                return true
            }
        }
    }

    DFS = breadthFirstSearch

    DFSRecursive = breadthFirstSearchRecursive

    DFSInOrder = depthFirstSearchInOrder

    DFSPreOrder = depthFirstSearchPreOrder

    DFSPostOrder = depthFirstSearchPostOrder
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// [9,4,20,1,6,15,170]
// console.log(tree.DFS())
// console.log(tree.DFSRecursive())

// [1,4,6,9,15,20,170]
console.log(tree.DFSInOrder())
// [9,4,1,6,20,15,170]
console.log(tree.DFSPreOrder())
// [1,6,4,15,170,20,9]
console.log(tree.DFSPostOrder())

//        9
//     /     \
//   4        20   
//  / \      /  \ 
// 1   6   15   170
