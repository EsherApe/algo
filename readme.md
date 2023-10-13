# JavaScript Algorithms and Data Structures

Welcome to the JavaScript Algorithms and Data Structures repository! This collection of algorithms and data structures is aimed at helping you learn and implement fundamental concepts in computer science using JavaScript.

## Table of Contents

1. [Introduction](#introduction)
2. [Algorithms](#algorithms)
3. [Data Structures](#data-structures)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

In this repository, you will find a variety of algorithms and data structures implemented in JavaScript.
## Algorithms

### TODO:

## Data Structures

### [Array](/dataStructures/Array.js)

#### Introduction

An array is a fundamental data structure in programming used to store a collection of elements. In JavaScript, arrays are versatile and can hold a mix of different data types, such as numbers, strings, objects, and other arrays. Arrays provide efficient and direct access to elements using indices.

#### Key Characteristics

- **Ordered Collection**: Elements in an array are ordered, meaning they are stored in a specific sequence, and you can access them by their numerical index.

- **Homogeneous or Heterogeneous**: In JavaScript, arrays can store elements of the same data type (homogeneous) or a mix of different data types (heterogeneous).

- **Dynamic Size**: JavaScript arrays are dynamic, which means you can change their size by adding or removing elements without specifying a fixed size in advance.

#### Basic Operations

1. **Access**: You can access elements in an array using their numerical index. The index starts at 0, so the first element is at index 0, the second at 1, and so on.

2. **Insertion**: You can add elements to an array using methods like `push()` to add to the end, `unshift()` to add to the beginning, or by directly assigning values to specific indices.

3. **Deletion**: Elements can be removed using methods like `pop()` to remove from the end, `shift()` to remove from the beginning, or by setting elements to `undefined`.

4. **Search**: You can search for elements in an array using methods like `indexOf()` to find the index of a specific value or `includes()` to check for the presence of a value.

#### Use Cases

Arrays are used in a variety of scenarios, including:

- Storing collections of data, such as a list of names, numbers, or objects.
- Implementing other data structures, like stacks and queues.
- Iterating through elements for data manipulation and processing.
- Implementing algorithms for sorting, searching, and more.

### [Hash Table](/dataStructures/HashTable.js)

#### Introduction

A Hash Table, also known as a hash map, is a widely used data structure that stores key-value pairs. It provides efficient data retrieval and storage operations. In JavaScript, objects are often used to implement hash tables. The key is hashed to determine its storage location, allowing for quick access to values based on their associated keys.

#### Key Characteristics

- **Key-Value Storage**: Hash tables store data in key-value pairs, allowing efficient retrieval and modification of values based on their keys.

- **Hash Function**: Hash tables use a hash function to transform the key into an index within the underlying storage array. This function should distribute keys evenly to optimize performance.

- **Collision Handling**: Collisions occur when two different keys result in the same hash value. Hash tables employ techniques like chaining or open addressing to manage collisions.

- **Dynamic Sizing**: Many hash tables automatically resize themselves when the number of stored key-value pairs exceeds a certain threshold to maintain efficient performance.

#### Basic Operations

1. **Insertion**: To add a new key-value pair to the hash table, the key is hashed to determine its storage location, and the value is stored there.

2. **Retrieval**: Given a key, the hash table uses the hash function to find the associated index and returns the corresponding value.

3. **Deletion**: A key can be removed from the hash table by using its hash to locate the index and then deleting the key-value pair.

#### Use Cases

Hash tables are commonly used in various scenarios, including:

- **Dictionary-Like Data Storage**: Storing data where quick retrieval by a unique key is essential, such as storing words and their meanings.

- **Caching**: Caching frequently used data to speed up access and reduce redundant computations.

- **Associative Arrays**: Implementing data structures like JavaScript objects where keys are used to access values.

- **Database Indexing**: In database systems, hash tables are used to index and retrieve records efficiently.

### [Linked List](/dataStructures/LinkedList.js)

#### Introduction

A Linked List is a linear data structure used to store a collection of elements, where each element points to the next one in the sequence. In JavaScript, Linked Lists are typically implemented using objects or classes to represent nodes, with each node containing a value and a reference (or pointer) to the next node.

#### Key Characteristics

- **Dynamic Size**: Linked Lists can dynamically change in size as elements are added or removed.

- **No Fixed Memory Allocation**: Unlike arrays, Linked Lists do not require a fixed amount of memory, allowing for efficient memory usage.

- **Insertions and Deletions**: Linked Lists excel at fast insertions and deletions at any position in the list.

#### Types of Linked Lists

1. **Singly Linked List**: In this type, each node points to the next node in the sequence.

2. **Doubly Linked List**: Each node in a doubly linked list points both to the next node and the previous node, enabling bidirectional traversal.

#### Basic Operations

1. **Insertion**: Adding a new node to the Linked List, either at the beginning, end, or a specific position.

2. **Deletion**: Removing a node from the Linked List, often specified by its value or position.

3. **Traversal**: Iterating through the Linked List to access its elements.

4. **Search**: Finding a specific element in the Linked List based on its value.

#### Use Cases

Linked Lists are used in various scenarios, including:

- **Dynamic Data Storage**: When the size of data is unknown or can change frequently.

- **Task Management**: Implementing task lists where you need to add or remove tasks quickly.

- **Undo/Redo Functionality**: Supporting undo and redo operations in applications.

### [Stack](/dataStructures/Stack.js)

#### Introduction

A Stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle, where the last element added is the first to be removed. It's similar to a physical stack of objects, such as a stack of plates. In JavaScript, you can implement a Stack using arrays or custom classes.

#### Key Characteristics

- **LIFO Principle**: In a stack, the most recently added item is the first one to be removed.

- **Operations**: Stacks typically support two primary operations: `push` for adding items onto the stack and `pop` for removing the top item.

- **Peek**: You can "peek" at the top item without removing it using the `peek` operation.

#### Basic Operations

1. **Push**: To add an item to the stack, you use the `push` operation. The new item becomes the top of the stack.

2. **Pop**: To remove and return the top item, you use the `pop` operation. This is where the LIFO principle comes into play.

3. **Peek**: The `peek` operation lets you view the top item without removing it from the stack.

### Use Cases

Stacks are used in various scenarios, including:

- **Function Call Stack**: Stacks are used to keep track of function calls in programming languages, ensuring that the last-called function returns before previous ones.

- **Expression Evaluation**: Stacks help with evaluating expressions, especially those involving parentheses, operators, and operands.

- **Backtracking Algorithms**: Stacks are employed in algorithms where you need to backtrack through a series of choices or states.

- **Undo/Redo Functionality**: Stacks can be used to implement undo and redo features in applications.

### [Queue](/dataStructures/Queue.js)

#### Introduction

A Queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. It's similar to a physical queue of people waiting in line. In JavaScript, you can implement a Queue using arrays or custom classes.

#### Key Characteristics

- **FIFO Principle**: In a queue, the first item added is the first to be removed.

- **Operations**: Queues typically support two primary operations: `enqueue` for adding items to the back of the queue and `dequeue` for removing items from the front.

- **Peek**: You can "peek" at the front item without removing it using the `peek` operation.

#### Basic Operations

1. **Enqueue**: To add an item to the back of the queue, you use the `enqueue` operation.

2. **Dequeue**: To remove and return the front item, you use the `dequeue` operation. This is where the FIFO principle comes into play.

3. **Peek**: The `peek` operation lets you view the front item without removing it from the queue.

#### Use Cases

Queues are used in various scenarios, including:

- **Task Scheduling**: Managing tasks or jobs in a queue to ensure they are processed in a specific order.

- **Breadth-First Search (BFS)**: Implementing algorithms like BFS in graph traversal, where you visit nodes layer by layer.

- **Print Job Management**: Managing print jobs in a printer's queue, where the first document submitted is printed first.

- **Messaging Systems**: Implementing message queues in software systems for reliable message processing.

## Contributing

If you have a new algorithm or data structure to add or if you find any issues, please follow these steps:

1. Fork this repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](https://mit-license.org/). Feel free to use and share these algorithms and data structures in your own projects.

Happy coding!
