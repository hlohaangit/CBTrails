const card = require("../utility/card")

class validationError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}

class node{
    constructor(card){
        this.data = card.cardNumber;
        this.name = card.cardType;
        this.next = null;
    }
}

class sortedLinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @description : add a new node to Linked list
     * @param {card} card which needs to be added
     */
    add(card) {
        if (this.search(card)) return;

        if (this.head == null) {
            this.head = new node(card);
        } else if (this.size() == 1) {
            var temp = new node(card);

            if (this.head.data == temp.data){
                this.head.next = temp;
            }

            if (this.head.data > temp.data) {
                temp.next = this.head;
                this.head = temp;
            } else {
                this.head.next = temp;
            }
        } else {
            var temp = new node(card);
            var position = 1;
            var iterator = this.head;
            while (iterator != null && iterator.data < temp.data) {
                position++;
                iterator = iterator.next;
            }
            this.insert(position, card);
        }
    }

    /**
     * @description : remove card from linked list
     * @param {card} card needs to be removed from Linked List
     */
    remove(card) {
        var data = card.cardNumber;
        var name = card.cardType
        try {
            if (this.head == null) {
                throw error;
            } else if (this.head.data == data && this.head.name == name) {
                var temp = this.head.next;
                this.head = temp;
            } else {
                var iterator = this.head.next;
                var behindIterator = this.head;
                while (iterator != null) {
                    if (iterator.data == data && iterator.name == name) {
                        var temp = iterator.next;
                        behindIterator.next = temp;
                        console.log("Removed card " + card.cardNumber+" of "+card.cardType);
                        return;
                    }
                    iterator = iterator.next;
                    behindIterator = behindIterator.next;
                }
                console.log("This card is already not present");
            }
        } catch (error) {
            console.log("No card in Linked List");
        }
    }

    /**
     * @description : search whether a value exists in linked list or not. Returns true is present else false
     * @param {card} search whether card is present in linked list or not
     */
    search(card) {
        var temp = new node(card);
        var data = temp.data;
        if (this.head == null) {
            return false;
        } else if (this.head.data == data && this.head.name == temp.name) {
            return true;
        } else {
            var iterator = this.head;
            while (iterator != null) {
                if (iterator.data == data && iterator.name == temp.name) return true;
                iterator = iterator.next;
            }
            return false;
        }
    }

    /**
     * @description: find whether linked list in empty or not
     */
    isEmpty() {
        return this.head == null ? true : false;
    }

    /**
     * @description: returns the size of linked list i.e. the number of elements in linked list
     */
    size() {
        if (this.head == null) return 0;
        else {
            var counter = 0;
            var temp = this.head;
            while (temp != null) {
                counter++;
                temp = temp.next;
            }
            return counter;
        }
    }

    /**
     * @description : returns index of card in linked list
     * @param {card} card which needs to searched in linked list
     */
    index(card) {
        var data = card.cardNumber;
        var name = card.cardType;
        if (this.head == null) return -1;
        else {
            var counter = 1;
            var iterator = this.head;
            while (iterator != null) {
                if (iterator.data == data && iterator.name == name) return counter;
                counter++;
                iterator = iterator.next;
            }
            return -1;
        }
    }

    /**
     * @description : insert a card at a give position in linked list
     * @param {position} : the position where card has to be entered
     * @param {card} : card which is to be added to linked list
     */
    insert(position, card) {
        try {
            if (position < 1) throw new validationError("poistion cannot be less than one");
            if (this.search(card)) throw new validationError("element already present ");
            if (this.size() < (position - 1)) {
                console.log("Your Position is greater than size of list. Appending at end of linked list");
                this.append(data);
            } else if (position == 1) {
                var temp = this.head;
                this.head = new node(card);
                this.head.next = temp;
            } else {
                var newNode = new node(card);

                var iterator = this.head;
                var temp = null;

                while (position-- > 1) {
                    temp = iterator;
                    iterator = iterator.next;
                }

                temp.next = newNode;
                newNode.next = iterator;
            }
        } catch (validationError) {
            console.log(validationError.message);
        }
    }

    /**
     * @description : remove last element from linked list
     */
    popFromLast() {
        if (this.head == null) {
            console.log("Empty linked list");
            return null;
        } else if (this.size() == 1) {
            var lastCard = this.head;
            this.head = null;
            return lastCard;
        }
        else {
            var iterator = this.head;
            var behindIterator = null;
            while (iterator.next != null) {
                behindIterator = iterator;
                iterator = iterator.next;
            }
            behindIterator.next = null;
            return iterator;
        }
    }

    /**
     * 
     * @param {position} : remove a node from particular position
     */
    pop(position) {
        try {
            if (position > this.size() || position < 1) throw new validationError("Invalid Position Number");
            if (position == 1) {
                var value = this.head.data;
                this.head = this.head.next;
                return value;
            }
            var temp = null;
            var iterator = this.head;
            while (position-- > 1) {
                temp = iterator;
                iterator = iterator.next;
            }
            var value = iterator.data;
            temp.next = iterator.next;
            return value;
        } catch (validationError) {
            console.log(validationError.message);
            return null;
        }
    }

    /**
     * @description : Prints the linked list on console
     */
    print() {
        var iterator = this.head;
        while (iterator != null) {
            process.stdout.write(iterator.data + " of "+iterator.name+" ");
            iterator = iterator.next;
        }
        console.log();
    }
}

module.exports = sortedLinkedList;