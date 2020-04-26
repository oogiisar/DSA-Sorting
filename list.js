'use strict';
class _Node {
  constructor (value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (value) {
    this.head = new _Node(value, this.head);
  }

  insertLast (value) {
    if (this.head === null) this.insertFirst(value);
    else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(value, null);
    }
  }

  remove (item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    } else {
      let prevNode = this.head;
      let currNode = this.head;
      while (currNode.next !== null && currNode.value !== item) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode.value === item) prevNode.next = currNode.next;
      else console.log('item not found!');
    }
  }

  find (item) {
    if (this.head === null) return null;
    let currNode = this.head;
    while (currNode.next !== null) {
      if (currNode.value === item) return currNode;
      currNode = currNode.next;
    }
    return null;
  }

  insertBefore (newData, key) {
    if (this.head === null || this.head.value === key) this.insertFirst(newData);
    else {
      let currNode = this.head;
      while (currNode.next !== null) {
        if (currNode.next.value === key) {
          currNode.next = new _Node(newData, currNode.next);
          return currNode.next;
        }
        currNode = currNode.next;
      }
      currNode.next = new _Node(newData, null);
      return currNode.next;
    }    
  }

  insertAfter (newData, key) {
    if (this.head === null) this.insertFirst(newData);
    else {
      let currNode = this.head;
      while (currNode.next !== null) {
        if (currNode.value === key) {
          currNode.next = new _Node(newData, currNode.next);
          return currNode.next;
        }
        currNode = currNode.next;
      }
      currNode.next = new _Node(newData, null);
      return currNode.next;
    }    
  }

  insertAt (newData, index) {
    if (this.head === null || index === 0) this.insertFirst(newData);
    else {
      let i=0;
      let currNode=this.head;
      while (i< index-1 && currNode.next !== null) {
        i++;
        currNode = currNode.next;
      }
      currNode.next = new _Node(newData, currNode.next);
    }
  }
}

module.exports = LinkedList;