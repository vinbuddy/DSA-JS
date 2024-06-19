class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// LIFO: Last In First Out

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    show() {
        let currentNode = this.top;
        let result = "Size: " + this.size + "\n";

        while (currentNode != null) {
            result += `|  ${currentNode.value}  \n`;
            currentNode = currentNode.next;
        }

        console.log(result);
    }

    push(value) {
        const node = new Node(value);

        // Check empty stack
        if (this.isEmpty()) {
            this.top = node;
            this.bottom = node;
            this.size++;
            return;
        }

        const newTop = node;
        const oldTop = this.top;

        newTop.next = oldTop;
        this.top = newTop;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return;

        const newTop = this.top.next;
        this.top = newTop;
        this.size--;

        return this.top;
    }
}

const stack = new Stack();
stack.push("NodeJS");
stack.push("VueJS");
stack.push("Angular");
stack.push("NextJS");

stack.pop();

stack.show();

/* 
    TOP:    | NextJS  |
            | Angular |
            | VueJS   |
    BOTTOM: | NodeJS  |
*/
