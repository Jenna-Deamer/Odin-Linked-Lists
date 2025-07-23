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
            tail.nextNode = newNode;
            // newNode becomes tail
            tail = newNode;
        }

        length++;
        console.log(`Head is: ${JSON.stringify(head)}`);
        console.log(`Tail is: ${JSON.stringify(tail)}`);
        console.log(`Length is: ${length}`);
    }

    const prepend = (value) => {
        // Add new node to start of list
        const newNode = Node(value);
        console.log(head)
        if (length === 0) {
            head = newNode;
            tail = newNode;
        } else {
            console.log('prepend')

            // set newNode next to current head, then set it as head
            newNode.nextNode = head;
            head = newNode;
            console.log(head)
        }
        length++;
    }
    const currentSize = () => {
        return length;
    }

    const currentHead = () => {
        return head;
    }

    const currentTail = () => {
        return tail;
    }

    const getCurrentIndex = (index) => {
        console.log('index: ' + index)
        if (index < 0 || index >= length) {
            return 'Out of bounds'
        } else {
            let currentNode = head;
            let currentIndex = 0;

            while (index <= length) {
                if (index === currentIndex) {
                    console.log('Index found: ' + currentIndex)
                    return currentNode;
                } else {
                    currentNode = currentNode.nextNode;

                    currentIndex++;
                }
            }

        }
    }

    const pop = () => {
        console.log('Pop!')
        if (length <= 0) {
            return "Error list is empty."
        } else {
            let currentNode = head;
            // Find the node beside the current tail
            while (currentNode.nextNode != tail) {
                currentNode = currentNode.nextNode;
                console.log(currentNode)
            }
            // Remove it's pointer and set it as new tail
            if (currentNode.nextNode === tail) {
                currentNode.nextNode = null;
                tail = currentNode;
            }

        }
    }
    return { append, prepend, currentSize, currentHead, currentTail, getCurrentIndex, pop };
}