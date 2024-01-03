class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  addElementLast(data){
    let node = new Node(data);

    if(this.head === null){
        this.head = node;
        this.tail = node;
    }else{
       this.tail.next = node;
       this.tail = node;
    }
    this.size++

  }

  addElementFirst(data){
    let node = new Node(data);

    if(this.head === null){
        this.head = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.size++
  }

  addElementAtIndex(data, index){

    if(index < 0 || index > this.size){
        throw RangeError(`A index number "out of range" has occurred`);
    }

    let node = new Node(data);
    let current, previous;

    if(this.head === null){
        this.head = node;
    }else{
        
        if(index === 0){
            this.addElementFirst(data);
            return
        }
        if(index === this.size){
            this.addElementLast(data);
            return
        }
        current = this.head;

        for(let i=0; i<index; i++){
            previous = current;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

    }
  }

  removeElementFirst(){
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      this.head = current.next;
    }
    this.size--;
  }

  removeElementLast(){
    let current = this.head,
      previous;
    for (let i = 0; i < this.size-1; i++) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    previous.next = null;

    this.size--;
  }

  removeElementAtIndex(index){
    if (index < 0 || index > this.size) {
      throw RangeError(`A index number "out of range" has occurred`);
    }

    if(index === 0){
        this.removeElementFirst();
        return;

    }else if(index === this.size-1) {
        this.removeElementLast();
        return;
    }else{
        let current = this.head,
          previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        let nextitem = current.next;
        previous.next = nextitem;

    }

    this.size--;

  }

  reverseElement(){
    let prev = null;
    let current = this.head;
    let next = null;

    for(let i=0; i<this.size; i++){
      if(i === 0){
        this.tail = current;
      }
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    
  }

  showSize(){
    return this.size;
  }

  showList(){
    let current = this.head;
    let $ = '';
    for(let i=0; i<this.size-1;i++){
        $ = $ + current.data.toString() + ' -> ';
        current = current.next;
    }
    console.log(`${$}${this.tail.data} -> END \nLength: ${this.size}`);
    console.log(`Head: ${this.head.data} \nTail: ${this.tail.data}`);

  }

  displayRec(){
    
  }

  getIndex(data){
    let node = this.head;
    for(let i=0; i<this.size; i++){
      if(node.data === data){
        return i
      }
      node = node.next;
    }
    return null
  }

  getData(index){
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        return node.data;
      }
      node = node.next;
    }
    return null;
  }

}

// let ll = new LinkedList();

ll.addElementLast(2);
ll.addElementLast(5);
ll.addElementLast(8);
ll.addElementLast(9);
ll.addElementLast(90);

// // ll.removeElementLast();

// // ll.removeElementAtIndex(1);
// // ll.removeElementAtIndex(2);

// // ll.addElementLast(5);
// // ll.addElementLast(20);
// // ll.addElementFirst(558);
// // ll.addElementAtIndex(4548,4);
// // ll.addElementFirst(52);

// // ll.reverseElement();

ll.showList();

// module.export = LinkedList; 