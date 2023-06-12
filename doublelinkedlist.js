class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            return null;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return null;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return this.tail;
    }
};

const linkedList = new doublyLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

console.log(linkedList);
console.log(linkedList.pop());