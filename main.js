import { LinkedList } from "./linkedList.js";

const list = LinkedList();

list.append("dog");
list.prepend("cat");

// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

console.log(list)
// console.log(list.currentSize())

console.log(list.getCurrentIndex(1));
