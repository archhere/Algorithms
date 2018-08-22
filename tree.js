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

class Tree{
  constructor(){
    this.root = null;
  }

// traverseBF and traverseDF will both takein a function as an argument
  traverseBF(callback){
    const arr = [this.root];
    while (arr){
      const node = arr.shift();
      // node.children.forEach(child => arr.push(child));
      arr.push(...node.children);
      callback(node);
    }
  }

  traverseDF(callback){
    const arr = [this.root];
    while (arr){
      const node = arr.shift();
      arr.unshift(...node.children);
      callback(node);
    }
  }

}


// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;
