'use strict';

function display (linkedList) {
  if (linkedList.head === null) console.log(linkedList.head);
  else {
    let i=0;
    let listItem = linkedList.head;
    while (listItem.next !== null) {
      console.log(`${i}: ${listItem.value}`);
      i++;
      listItem = listItem.next;
    }
    console.log(`${i}: ${listItem.value}`);
  }
}

function size (linkedList) {
  if (linkedList.head === null) return 0;
  else {
    let i=1;
    let listItem = linkedList.head;
    while (listItem.next !== null) {
      i++;
      listItem = listItem.next;
    }
    return i;
  }
}

function isEmpty (linkedList) {
  if (linkedList.head === null) return true;
  return false;
}

function findPrevious (linkedList, item) {
  if (linkedList.head === null || linkedList.head.value === item) return null;
  else {
    let currNode = linkedList.head;
    while (currNode.next !== null) {
      if (currNode.next.value === item) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return null;
  }
}

function findLast (linkedList) {
  if (linkedList.head === null) return null;
  else {
    let currNode = linkedList.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
}

function reverseList (linkedList) {
  const listSize = size(linkedList);
  if (listSize <= 1) return linkedList;
  if (listSize === 2) {
    let temp1 = linkedList.head;
    let temp2 = linkedList.head.next;
    temp2.next = temp1;
    temp1.next = null;
    linkedList.head = temp2;
    return linkedList;
  }
  let temp1 = linkedList.head;
  let temp2 = linkedList.head.next;
  let temp3 = linkedList.head.next.next;
  temp1.next = null;
  while (temp3.next !== null) {
    temp2.next = temp1;
    temp1 = temp2;
    temp2 = temp3;
    temp3 = temp3.next;
  }
  temp2.next = temp1;
  temp3.next = temp2;
  linkedList.head = temp3;
  return linkedList;
}

function return3rdFromEnd (linkedList) {
  if (!linkedList.head.next.next) return null;
  else {
    let currNode = linkedList.head;
    while (currNode.next.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
}

function returnMiddleValue (linkedList) {
  const listSize = size(linkedList);
  const midpoint = Math.floor(listSize/2);
  let i = 0;
  let currNode = linkedList.head;
  while (i < midpoint) {
    i = i++;
    currNode = currNode.next;
  }
  return currNode;
}

function hasCycle (linkedList) {
  const ptrArray = [];
  let currNode = linkedList.head;
  while (currNode.next !== null) {
    if (ptrArray.includes(currNode.next)) return true;
    ptrArray.push(currNode.next);
    currNode = currNode.next;
  }
  return false;
}

function reverseDoubleList (linkedList) {
  const listSize = size(linkedList);
  if (listSize <= 1) return linkedList;
  if (listSize === 2) {
    let temp1 = linkedList.head;
    let temp2 = linkedList.head.next;
    temp2.next = temp1;
    temp1.next = null;
    linkedList.head = temp2;
    temp2.prev = null;
    temp1.prev = temp2;
    return linkedList;
  }
  let temp1 = linkedList.head;
  let temp2 = linkedList.head.next;
  let temp3 = linkedList.head.next.next;
  temp1.next = null;
  while (temp3.next !== null) {
    temp2.next = temp1;
    temp1.prev = temp2;
    temp1 = temp2;
    temp2 = temp3;
    temp3 = temp3.next;
  }
  temp2.next = temp1;
  temp1.prev = temp2;
  temp3.next = temp2;
  temp2.prev = temp3;
  linkedList.head = temp3;
  return linkedList;
}

module.exports = { display, size, isEmpty, findPrevious, findLast, 
  reverseList, return3rdFromEnd, returnMiddleValue, hasCycle, reverseDoubleList };