const Node = function (val) {
    let nextNode = null;

    return { val, nextNode }
}

export function LinkedList() {
    let head = null;
    let tail = null;
    let length = 0

    const append = (value) => {
        // create new node & add it to the end of the linked list
        const newNode = Node(value);
        console.log("Value is: " + value)
        console.log(newNode)
        // if list is empty set newNode as the head and tail (A list of 1)
        if (length === 0) {
            head = newNode;
            tail = newNode;
        } else {
            // current tail must point to newNode (currentEnd -> NewEnd)
            tail.next = newNode;
            // newNode becomes tail
            tail = newNode;
        }

        length++;
        console.log(`Head is: ${JSON.stringify(head)}`);
        console.log(`Tail is: ${JSON.stringify(tail)}`);
        console.log(`Length is: ${length}`);

    }

    return { append };
}