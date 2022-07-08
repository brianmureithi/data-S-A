/* Singly Linked List

It is represented by a pointer to the first node in the list. 
The first node is the head
      -If the list is empty the head points to null , 
      --We can check the last element in the list by finding out which element points to null
        -Each node contains a data item, and a pointer to the next node*/

//head of the list. 
let head;
class Node{
      /* A linked list node class */

      /* Constructor to create and initialize an object instance of the node class */
        constructor(val){
                  /* this refers to this object
                    -Data equals to the parameter given as val */
                  this.data=val;
                  this.next =null;

          }
   }


      
      /* Inserting a new data item at the begining of a linked list. This node will receive a pointer to the head and change pointer to the new node */

   push = new_data =>{
        /* Creating new node and assigning the value passed as parameter */
          let new_node = new Node(new_data)
          new_node.next=head;
          head=new_node;
     

    }

    /* Inserting a node after a given previous node */

      insertAfter = (previous_node, new_data) => {
              if(previous_node == null){
                console.log("previous node cannot be null");
                return; /* Stop code flow */
              }

                  let new_node = new Node(new_data);
                  new_node.next = previous_node.next;
                  previous_node.next=new_node;
          
        }
      
    
       /* Method to print all linked list items */

    printList = () =>{
        let n = head;
        console.log('The resultant singly linked list is '); 
              while(n != null){
                console.log(n.data + ' ');
                n=n.next;
              }
      }


        /* Function to add a node item at the end of the list */

 append = (new_data) => {

          let newNode = new Node(new_data)
          
          /* Check if the list is empty by comparing the head to null
              -If the list is empty the new data will be the new head*/

                  if(head == null){
                    head = newNode;
                    /* Isn't it same as newNode? */
                  }
          /* The last node points to null */
          newNode.next = null;

          /* Else traverse to the last node */

            let last = head;
                    while(last.next != null){
                      last = last.next;
                  /*  Change the next of the last node
                    */  last.next =newNode;
                      return
                    }

   }

   /* Function to get the nth item of a list */

    getNthItem = (index) =>{
      /* Accepts an index parameter */
      let current = head, count= 0;

            while(current != null){
                if(count == index){
                  console.log('The ' + index +'\'th item is ' + current.data)
                }
                count++;
                current = current.next;
              
            }
    /* Using assert to throw error if the user inserts an index that doesnt exist */
        console.assert(false);
        return 0;
    
    }

        /* Function to delete the first occurrence of given a key */

  deleteNode = (key) => {
          let temp = head, prev =null;
          /* If head contains the key to be deleted */

              while(temp != null && temp.data == key){
                head = temp.next;
                return;
              }

          /* Finding the key to be deleted */
                while(temp != null && temp.data != key){
                  prev = temp;
                  temp = temp.next;
                }
  /* If the key was not present */
          if(temp == null){
            return;
          }
  /* Remove or unlink the node from the list */
          prev.next = temp.next;

        }
      

  


    /* Creating a linked list with three items */
/*     let head= new Node(1);
    let second = new Node(2);
    let third =new Node(3);

    head.next=second
    second.next=third
    third.next=null; */

  
            append([1,2,3])
            push([6,8,10])
            getNthItem(1)
            /* push(15)
            append(10)
            push(3)
            push(9)
            insertAfter(head.next,33) */

      printList();
    

 
 