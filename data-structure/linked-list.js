class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertTail(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    insertHead(value) {
        /* node.next sẽ trỏ đến node đầu tiên trong linked list
           cập nhật node là node đầu tiên trong linked list
        */

        const node = new Node(value);

        node.next = this.head;
        this.head = node;
    }

    removeTail() {
        // Case: Empty list
        if (this.head === null) {
            return;
        }

        // Case: Single node
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let currentNode = this.head;
        let prevNode = null;

        while (currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        prevNode.next = null;
        this.tail = prevNode;
    }

    removeHead() {
        if (this.head === null) return;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.next;
    }

    findByIndex(index) {
        if (index < 0) return null;
        if (index === 0) return this.head;

        let nodeIndex = 0;
        let currentNode = this.head;

        //  NodeJS -> JS -> React -> React Native

        while (currentNode != null) {
            if (nodeIndex === index) {
                return currentNode;
            }

            currentNode = currentNode.next;
            nodeIndex++;
        }

        return null;
    }

    insertAfter(index, value) {
        /* 
            insertAfter(1, "VueJS")
    
            NodeJS -> JS -> React -> React Native
            NodeJS -> JS ->        React -> React Native
                         -> VueJS -> 
            NodeJS -> JS -> VueJS -> React -> React Native
        */

        if (index < 0) return;

        if (index === 0) {
            this.insertHead(value);
            return;
        }

        const node = new Node(value);

        const currentNode = this.findByIndex(index);
        const nextNode = currentNode.next;

        currentNode.next = node;
        node.next = nextNode;
    }

    insertBefore(index, value) {
        if (index < 0) return;

        if (index === 0) {
            this.insertHead(value);
            return;
        }

        /* 
            insertBefore(1, "Angular")
    
            NodeJS -> VueJS -> JS -> React -> React Native
            NodeJS ->       -> JS -> React -> React Native
                   -> Angular 
            NodeJS ->  Angular -> JS -> React -> React Native
        */

        const node = new Node(value);

        const currentNode = this.findByIndex(index);
        const prevNode = this.findByIndex(index - 1);

        prevNode.next = node;
        node.next = currentNode;
    }

    removeByIndex(index) {
        if (index < 0) return;

        if (index === 0) {
            this.removeHead();
            return;
        }

        /* 
            removeByIndex(1)
    
            NodeJS -> VueJS -> JS -> React -> React Native
            NodeJS ->       -> JS -> React -> React Native
            NodeJS -> JS -> React -> React Native
        */

        const currentNode = this.findByIndex(index);
        const nextNode = currentNode.next;
        const prevNode = this.findByIndex(index - 1);

        prevNode.next = nextNode;
    }

    show() {
        let currentNode = this.head;
        let result = "";

        while (currentNode != null) {
            result += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }

        result += "null";

        console.log(result);
    }
}

const list = new LinkedList();

// --------- Insert -----------
list.insertTail("JS");
list.insertTail("React");
list.insertTail("React Native");

list.insertHead("NodeJS");

list.insertAfter(1, "VueJS");
list.insertBefore(1, "Angular");

// --------- Remove -----------

list.removeByIndex(1);
list.show();

//list.removeTail();
// list.removeHead();

// const node = list.findByIndex(-1);
// console.log(node?.value ?? "Not found");
