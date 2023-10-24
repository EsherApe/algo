#### 1. Sort 10 schools around your house by distance

- **Insertion sort** - not large input, ease to code, space complexity O(n)

#### 2. eBay sorts listings by the current Bid amount

- **Counting or Radix sort** - because there must be only numbers between 1 to 50 000$

#### 3. Sport scores on ESPN

- **Quick sort** - more efficient than merge sort by memory complexity

#### 4. Massive database (can't fit all into memory) needs to sort through past year's user data

- **Merge sort** - we will sort it externally, so space complexity is not important. Also, We worry about worst cases, so it is better than the quick sort

#### 5. Almost sorted Udemy review data needs to update and add 2 new reviews

- **Insertion sort** - because reviews almost sorted

#### 6. Temperature Records for the past 50 years in Canada

- **Counting or Radix sort** - if not have decimals
- **Quick sort** - if have decimals

#### 7. Large user name database needs to be sorted. Data is very random

- **Quick sort** - space complexity! if we don't care about worst case
- **Merge sort** - if we will sort externaly and we care about worst case

#### 8. You want to teach sorting for the first time

- **Bubble sort and Selection sort** - most simple