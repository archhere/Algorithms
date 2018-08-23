// Implement Binary Search Tree

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data){
    if(data < this.data && this.left){
      this.left.insert(data);
    } else if(data < this.data){
      this.left = new Node(data);
    } else if(data > this.data && this.right){
      this.right.insert(data);
    }else if(data > this.data){
      this.right = new Node(data);
    }
  }

  contains(data){
    if (this.data === data) {
      return this;
    } else if(this.data < data && this.right){
      return this.right.contains(this.data);
    } else if(this.data > data && this.left){
      return this.left.contains(this.data);
    }
  }
}

module.exports = Node;
// --------------------------------------------------------------------------


function Validate(node,min = null,max = null) {
  if(max !==null && node.data > max){
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  if(node.left && !Validate(node.left,min,node.data)){
    return false;
  }

  if(node.right && !Validate(node.right,node.data,max)){
    return false;
  }

  return true;
}
