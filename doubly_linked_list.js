class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class Doubly_LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  addFirst(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let previ = this.head;
      node.next = previ;
      node.prev = null;
      previ.prev = node;
      this.head = node;
    }
    this.size++;
    return data;
  }

  addLast(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      node.next = null;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return data;
  }

  addAtindex(data, index) {
    if (index < 0 || index > this.size)
      throw RangeError(`A index number "out of range" has occurred`);

    if (index === 0) return this.addFirst(data);

    if (index === this.size - 1) return this.addLast(data);

    let node = new Node(data);

    let current = this.head,
      previ;
    for (let i = 0; i < index; i++) {
      previ = current;
      current = current.next;
    }
    previ.next = node;
    node.prev = previ;

    node.next = current;
    current.prev = node;

    this.size++;

    return data;
  }

  removeFirst() {
    let previ = this.head;
    previ.next = null;

    this.head = this.head.next;
    this.head.prev = null;

    this.size--;

    return previ.data;
  }

  removeLast() {
    let previ = this.tail;
    previ.next = null;

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.size--;

    return previ.data;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.size)
      throw RangeError(`A index number "out of range" has occurred`);

    if (index === 0) return this.removeFirst();
    if (index === this.size - 1) return this.removeLast();

    let current = this.head,
      previ,
      next;
    for (let i = 0; i < index; i++) {
      previ = current;
      current = current.next;
    }
    next = current.next;

    current.prev = null;
    current.next = null;

    previ.next = next;
    next.prev = previ;

    this.size--;

    return current.data;
  }

  display() {
    let node = this.head,
      $ = "";
    while (node != null) {
      $ += `${node.data.toString()} -> `;
      node = node.next;
    }

    console.log(`${$}END \nLength: ${this.size}`);
    console.log(`Head: ${this.head.data} \nTail: ${this.tail.data}`);
  }

  reverse() {
    let node = this.head, temp;
    // this.tail = node;
    
    for(let i=0; i<this.size ;i++){
      temp = node.prev;
      node.prev = node.next;
      node.next = temp;
      node = node.prev;
    }

    if(temp != null){
      this.head = temp;
    }

  }

  getIndex(data){
    let node = this.head;

    for(let i=0; i<this.size-1; i++){
        if(node.data === data){
            return i;
        }
        node = node.next;
    }

    return null;
  }

  getData(index){
    let node = this.head;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return node.data;
      }
      node = node.next;
    }

    return null;
  }

  showSize() {
    return this.size;
  }
}

let dll = new Doubly_LinkedList();

dll.addLast(2)
dll.addLast(6)
dll.addLast(34)
dll.addLast(8)
dll.addLast(7)
dll.addLast(70)
dll.addLast(457)

// dll.addAtindex(54,2)

// console.log(dll.removeAtIndex(7))
// console.log(dll.getData(1))

dll.display()
dll.reverse()
dll.display()