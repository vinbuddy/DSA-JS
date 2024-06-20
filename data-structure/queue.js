class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    // insertTail
    enqueue(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        this.tail.next = node;
        this.tail = node;

        console.log(this.head);
        this.size++;
    }

    dequeue() {
        if (!this.head) return null;

        const dequeuedNode = this.head;
        this.head = this.head.next;

        this.size--;

        return dequeuedNode.value;
    }

    peek() {
        return this?.head?.value ?? null;
    }

    show() {
        let currentNode = this.head;
        let result = "Size: " + this.size + "\n";

        while (currentNode != null) {
            result += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }

        console.log(result);
    }
}

const queue = new Queue();

queue.enqueue("NodeJS");
queue.enqueue("VueJS");
queue.enqueue("Angular");
queue.enqueue("NextJS");

queue.show();

queue.dequeue();

queue.show();

console.log(queue);
