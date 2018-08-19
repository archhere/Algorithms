
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
}

const list = new LinkedList();
list.head = new Node(10);

module.exports = {Node,LinkedList};

// -------------------------------------------------------------------------
