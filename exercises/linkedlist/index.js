// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let counter = 0;

        while( node !== null ) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while( node.next !== null ) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if( this.head ) this.head = this.head.next;
    }

    removeLast() {
        let node = this.head;

        if( this.head === null || this.head.next === null ) {
            this.clear();
            return;
        }

        // This node inside of while, is a pointer to the penultimate node
        while( node.next.next !== null ) {
            node = node.next;
        }

        // Removing the reference to the final node
        node.next = null;
    }

    insertLast(data) {
        let node = this.head;

        if( !this.head ) {
            this.head = new Node(data);
            return;
        }

        while( node.next !== null ) {
            node = node.next;
        }

        node.next = new Node(data);
    }

    getAt(i) {
        let node = this.head;
        let counter = 0;

        while( node !== null ) {
            if( counter === i) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return node;
    }

    removeAt(i) {
        if(!this.head) return;

        if( i === 0 ) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.getAt( i - 1 );
        
        if( !prevNode || !prevNode.next) {
            return;
        }

        prevNode.next = prevNode.next.next;
    }

    insertAt(data, i) {
        
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        
        if( i === 0 ) {
            this.head = new Node(data, this.head);
            return;
        }
        
        let prevNode = this.getAt( i - 1 ) || this.getLast();
        let node = new Node(data, prevNode.next);
        prevNode.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while(node !== null) {
            fn(node, counter); // Call the function
            counter++;
            node = node.next;
        }
    }
}

const l = new LinkedList();

l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);

l.removeAt(0);

debugger;

module.exports = { Node, LinkedList };
