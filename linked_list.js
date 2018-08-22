
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

  // removeLast(){
  //   if (!this.head) return null;
  //   let currentNode = this.head;
  //   while (currentNode.next.next){
  //     this.currentNode = this.currentNode.next;
  //   }
  //   this.currentNode.next = null;
  // }

  removeLast(){
    let previous = this.head;
    let nextNode = this.head.next;
    if (!previous) return;
    if (!nextNode) {
      previous.next = null;
      return;
    }
    while(nextNode.next){
      previous = nextNode;
      nextNode = nextNode.next;
    }
    previous.next = null;
    return;
  }

  insertLast(data){
    let lastNode = this.getLast();
    let newNode = new Node(data);
    if (!lastNode){
      this.head = newNode;
    } else {
      lastNode.next = newNode;
    }
  }

  getAt(integer){
    if(!this.head) return null;
    let index = 0;
    let currentNode = this.head;
    while (index < integer){
      if(!currentNode) return null;
      currentNode = currentNode.next;
      index++;
    }
    return currentNode;
  }

  removeAt(integer){
    if(!this.head) return null;
    if(integer === 0) {
      this.head = this.head.next;
      return;
    } else {
      let previous = this.getAt(integer-1);
      if (!previous || !previous.next) return;
      else{
        previous.next = previous.next.next;
        return;
      }
    }
  }

  insertAt(integer,data){
    if(!this.head) {
      this.head = new Node(data);
      return;
    }
    if(this.integer===0){
      this.head = new Node(data,this.head);
      return;
    }
    let previous = this.getAt(integer-1) || this.getLast();
    let newNode = new Node(data,previous.next);
    previous.next = newNode;
  }
}

const list = new LinkedList();
list.head = new Node(10);

module.exports = {Node,LinkedList};

// -------------------------------------------------------------------------

// Generators and iterators

function *newlist() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = newlist();
let arr = [];
for(let n of generator){
  arr.push(n);
}
console.log(arr);

// -------------------------------------------------------------------------

function *numbers(){
  yield 1;
  yield 2;
  yield* morenumbers;
  yield 6;
  yield 7;
}

function *morenumbers(){
  yield 3;
  yield 4;
  yield 5;
}

const newGen = numbers();
let result = [];
for(let n of newGen){
  result.push(n);
}

// -------------------------------------------------------------------------
// find the mid point of a linked list without using the length of the linked list.
// In our case, if the linked list has an even length, we want to return the earlier value.

function midpoint(linkedlist){
  let slow = linkedlist.head;
  let fast = LinkedList.head;

  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;

// -------------------------------------------------------------------------

// Given a linked list return true if it is circular and false if it isnt.

function circular(linkedlist){
  let slow = linkedlist.head;
  let fast = linkedlist.head.next;

  while(slow.next && slow.next.next){
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// -------------------------------------------------------------------------

// Without using size, find the node n nodes from the last node in a linked list

function fromLast(linkedlist,n){
  let slow = linkedlist.head;
  let fast = linkedlist.head;
  while(n > 0) {
    fast = fast.next;
    n--;
  }
  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }

  return slow;

}

// -------------------------------------------------------------------------
