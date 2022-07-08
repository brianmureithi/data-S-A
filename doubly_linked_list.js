/* 
*Doubly Linked list */
let head_ref = null;


    class Node{
    /* Keeps track of previous and next node */
                constructor(val){
                    this.data = val;
                    this.prev = null;
                    this.next = null;
                }

    }






    push = (new_data) =>{
    
            let new_node = new Node(new_data);
    /*  Code above is the same as the one below 
    because the new node data is passed as a parameter in the constructor and assigned as data's value*/
        /* new_node.data = new_data */ 

                new_node.next=head_ref;
                new_node.prev=null;

         /* Each node added will point to null, this is how we know the last value to be entered; by checking which value points to null
           The first element will have null as its previous node*/
         /* Change head ref previous data to point to the new node. */
                if(head_ref != null){
                    head_ref.prev=new_node;
                }
            /* The head reference is updated for other new elements to use as their  */
            head_ref = new_node;
    }





    printList = () => {
        var t = head_ref;
        var last = null;
            /* We use head to traverse through linked lists */
        console.log('The doubly linked list in forward traversal')
            while(t !=null)
            {
                    console.log(t.data);
                    last = t;
                    t= t.next
           }

        console.log('The doubly linked list in reversal traversal')
            
            while(last != null)
            {
                console.log(last.data);
                last=last.prev;
            }

     }

        push(5);
        push(6);
     
        printList();

        

   