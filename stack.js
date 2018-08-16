// -----------------------------------------------------------------------

class Stack {
  constructor(){
    this.data = [];
  }

  push(record){
    this.data.push(record);
  }

  pop(){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length-1];
  }

}

module.exports = Stack;



// -----------------------------------------------------------------------

// Implement queue from stacks


// -----------------------------------------------------------------------

class Queue {

  constructor(){
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(record){
    this.stackA.push(record);
  }

  pop(){
    while(this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    let stackPopped = this.stackB.pop();

    while(this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return stackPopped;
  }

  peek(){
    while(this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    let stackPeeked = this.stackB.peek();

    while(this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }

    return stackPeeked;
  }

}

module.exports = Queue;
