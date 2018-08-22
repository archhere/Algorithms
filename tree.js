// Implement a binary search tree

class Node{
  constructor(data){
    this.data = data;
    this.children = [];
  }
  add(data){
    // let child = new Node(data);
    // this.children.push(child);
    this.children.push(new Node(data));
  }

  remove(data){
    let childToNotRemove = this.children.filter(child => child.data !== data);
    this.children = childToNotRemove;
  }
}

class Tree{}
