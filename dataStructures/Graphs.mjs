// Graphs Types

// Directed and Undirected
// Weighted and Unweighted (edges data)
// Cyclic and Acyclic

// 3 ways to build a Graphs
// We need to build this Graph:
// 0 connect 2; 1 connect 2 and 3; 2 connect 0, 1 and 3; 3 connect 1 and 2;
//     2 — 0
//    / \
//   1 — 3

// (1) Edge List
const edgeList = [[0,2],[2,3],[2,1],[1,3]]

// (2) Adjacent List 
// Index of the array is the value of the actual Graph node
// We can use object for this
const adjacentListArr = [[2],[2,3],[0,1,3],[1,2]]
// Or
const adjacentListObj = {
    '0': [2],
    '1': [2,3],
    '2': [0,1,3],
    '3': [1,2]
}

// (3) Adjacent Matrix
// 0 = false, 1 = true
const adjacentMatrixArr = [
    [0, 0, 1, 0], // node 0
    [0, 0, 1, 1], // node 1
    [1, 1, 0, 1], // node 2
    [0, 1, 1, 0], // node 3
]
// Or
const adjacentMatrixObj = {
    '0': [0, 0, 1, 0], // node 0
    '1': [0, 0, 1, 1], // node 1
    '2': [1, 1, 0, 1], // node 2
    '3': [0, 1, 1, 0], // node 3
}

// Undirected, Unweighted Graph Class

class Graph {
    constructor() {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {
        if (this.adjacentList[node]) {
            return false
        }

        this.adjacentList[node] = []
        this.numberOfNodes++
        return true
    }

    addEdge(node1, node2) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            return false
        }

        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)

        return true
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList)

        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node]
            let connections = ''

            for (let vertex of nodeConnections) {
                connections += vertex + ' '
            }

            console.log(node + '-->' + connections)
        }
    }
}

// Create Graph:
// 3 — 4 — 5
// |   |
// 1 — 2
//  \ /
//   0

const myGraph = new Graph()

myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')

myGraph.showConnections()
console.log(myGraph)

// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5