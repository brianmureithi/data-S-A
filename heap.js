 /* 
 *Heap Data structure 
 
-This is a complete binary tree that satisfies the heap property
- Can be a maximum or a minimum heap
- If a maximum, each node must be greater than its children, and the root node is the largest of all nodes
- On a minimum heap, any given node is smaller than its children, and the root node is the smallest of all


-One must heapify a heap to ensure the rules apply
                             Steps
        -Create the binary tree and ensure it is complete. 
        -2n/2 - 1 to get the first index of non-leaf node == i
        -Check the left and right node after setting the current element(i) as largest
        -left = 2i+1 and right = 2i + 2
        -Always remember that count starts from zero. The binary tree is constructed from an array. 
        - If the left child is greater than the current parent element, set the left child as largest,
          while if the right child is greater than the current set largest element, set it as largest.
        -Swap largest with the current element.
        -Repeat above steps until the subtrees are heapified
*/

