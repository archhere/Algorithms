
// A very simple implementation of linkedlist

const nodeOne = {
  data: 123
};

const nodeTwo = {
  data: 456
};

nodeOne.next = nodeTwo;

// These are 2 nodes that arent linked. Now we need to explicitly link
// them together.

// -------------------------------------------------------------------------

class Node {
  constructor(data,next=null) {
      this.data = data;
      this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data,this.head);
  }

  size(){
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.next;
      this.count++;
    }
    return count;
  }

  getFirst(){
    return this.head;
  }

  // getLast(){
  //   let currentNode = this.head;
  //   while (currentNode.next) {
  //     currentNode = currentNode.next;
  //   }
  //   return currentNode;
  // }

  getLast(){
    if(!this.head) return null;
    let currentNode = this.head;
    while(currentNode){
      if(!currentNode.next) return currentNode;
      currentNode = currentNode.next;
    }
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if (!this.head) return null;
    let second = this.head.next;
    this.head = second;
  }
}

const list = new LinkedList();
list.head = new Node(10);

module.exports = {Node,LinkedList};

// -------------------------------------------------------------------------
