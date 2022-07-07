/* Linked List

It is represented by a pointer to the first node in the list. 
The first node is the head
      -If the list is empty the head points to null , 
      --We can check the last element in the list by finding out which element points to null
        -Each node contains a data item, and a pointer to the next node*/

//head of the list. 

    class Node{
      /* A linked list node class */

      /* Constructor to create and initialize an object instance of the node class */
      constructor(val){
        
        /* this refers to this object
          -Data equals to the parameter given as val */
        this.data=val;
        this.next =null;

      }


      
      /* Inserting a new data item at the begining of a linked list. This node will receive a pointer to the head and change pointer to the new node */

      push = (new_data) =>{
        /* Creating new node and assigning the value passed as parameter */

      let new_node = new Node(new_data)
       new_node.next=head;
       head=new_data;

    }

    /* Inserting a node after a given previous node */

        insertAfter = (previous_node, new_data) => {
           if(previous_node == null){
            console.log("previous node cannot be null");
            return /* Stop code flow */
           }

           let new_node = new Node(new_data);
           new_node.next = prev_node.next;
           previous_node.next=new_node;
           


        }
      
    }
       /* Method to print all linked list items */

        printList =() =>{
        let n = head;
        while(n != null){
          console.log(n.data + ' ');
          n=n.next;
        }

      }


    /* Creating a linked list with three items */
    let head= new Node(1);
    let second = new Node(2);
    let third =new Node(3);

    head.next=second
    second.next=third
    third.next=null;

    printList();
    

 
 