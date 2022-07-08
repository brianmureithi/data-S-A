/* 
*Binary tree

-Contains three parts
            --Data
            --Pointer to left child
            --Pointer to right child 

    Root - The top most node of the tree that has no parent
    Edge - Act as link between parent node and child nodes
    Leaf -  A node that has no child, usually the last node of a tree. There can be multiple leaf nodes
    Depth - Depth of a node is the distance from the root node to that particular node
    Height - Height of a node is the distance from that node to the deepest node of the tree
    Height of tree - Is the maximum height of any node

        Traversal
        Preorder = root -> left ->right
        Inorder = left ->root -> right
        PostOrder
            */

    /* Creating a binary tree */

    class Node{
        constructor(item){
            this.key = item
            this.left = this.right = null;
        }
    }