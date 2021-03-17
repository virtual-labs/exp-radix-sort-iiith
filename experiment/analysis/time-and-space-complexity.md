### Running Time of Radix Sort

The running time complexity of radix sort in O(nd) where :

   - **n**
 is the number of elements
   - **d** is the maximum number of digits in any element of the array

Each step of the algorithm (when we are putting the elements in buckets according to say the m'th digit) requires O(n) time as we iterate over all the elements of the array.

Now there will be d steps in order to sort the whole array.

Hence the time complexity becomes O(nd)

### Explaining time complexity of Radix sort
<img src="images/radix_complexity.png"/>

### Space Complexity of Radix Sort

Space Complexity for Radix sort is **O(n+b)** where :

   - **n** is the number of elements

   - **b** is the base of the number representation being used which is equal to the number of buckets required

A space of O(n) is required to store the elements and O(b) is for the buckets used while sorting. Hence complexity becomes O(n+b)

