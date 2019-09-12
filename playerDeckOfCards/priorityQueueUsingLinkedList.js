const linkedList = require("../playerDeckOfCards/sortedLinkedList")

class priorityQueue{
    constructor(){
        this.head = null;
    }

    /**
     * @overview : add card to queue
     * @param {card} card which needs to enqueued in queue
     */
    enqueue(card){
        if(this.head == null){
            this.head = new linkedList();
        }
        this.head.add(card);
    }
    /**
     * @overview : dequeue data i.e. remove data from front of queue
     */
    dequeue(){
        try{
            if(this.head == null || this.head.size() == 0)throw error;
            else return this.head.pop(1);
        }catch(error){
            console.log("Empty Queue");
        }
    }

    /**
     * @overview : returns the number of elements in queue
     */
    size(){
        return this.head.size();
    }
    
    /**
     * @description : prints the queue
     */
    print(){
        this.head.print();
    }

}

module.exports = priorityQueue;