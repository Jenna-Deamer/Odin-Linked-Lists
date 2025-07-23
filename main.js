import { LinkedList } from "./linkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

// list.append("hamster");
// list.append("snake");
// list.append("turtle");


// console.log(list.currentSize())

console.log(list)
list.pop();
console.log(list)

console.log(list.getCurrentIndex(1));
