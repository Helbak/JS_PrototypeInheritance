


function myList() {
    this.name = "List";
    this.size;
}
myList.prototype.getSize = function () {
    return this.size;
};
myList.prototype.getSize = function () {
    return this.size;
};
myList.prototype.doPush = function () {
};
myList.prototype.upgradeList = function () {
};
myList.prototype.doUnshift = function () {
};
myList.prototype.doPop = function () {
};
myList.prototype.listToList = function () {
};
myList.prototype.doRemove = function () {
};
myList.prototype.doShift = function () {

};
myList.prototype.doSort = function () {

};
myList.prototype.doSplice = function () {
};
myList.prototype.doToString = function () {
};
myList.prototype.doMap = function () {

};
myList.prototype.convertList = function (list) {
    if (list.array != null) {
        myLinkedList.apply(this);
        let newLink = new myLinkedList();

        for (let i = 0; i < list.array.length; i++) {
            newLink.doPush(list.array[i]);
        }
        return newLink;
    }
    if (list.rootNode != null) {

        myArrayList.apply(this);
        let newArray = new myArrayList();
        let nextNode = list.rootNode;
        for (let i = 0; i < list.size; i++) {
            nextNode = list.getNextNode(list.rootNode);
            newArray.doPush(nextNode.el);
        }
        return newArray;
    }
    return false;
};


function myArrayList() {
    myList.apply(this,arguments);
    this.array = [];
    this.size = 0;
}
myArrayList.prototype = Object.create(myList.prototype)
myArrayList.prototype.constructor = myArrayList;

myArrayList.prototype.getSize = function () {
    let size = 0;
    this.array.forEach(function (element) {
        size++;

    });
    return size;
};
myArrayList.prototype.doSetArray = function (array) {
    if (array == null) {
        return false;
    }
    if (array.length >= 0 && typeof array != 'string') {
        this.array = array;
        return this.array;
    }
    return false;
};
myArrayList.prototype.doPush = function (element) {
    if (element == null) {
        return false;
    }
    this.array[this.array.length] = element;
    return element;
};
myArrayList.prototype.upgradeList = function () {
    this.array = [];
    return this.array;
}
myArrayList.prototype.doUnShift = function (element) {
    if (element == null) {
        return false;
    }
    for (let i = this.getSize(); i > 0; i--) {
        this.array[i] = this.array[i - 1];
    }
    this.array[0] = element;
    return this.array[0];
};
myArrayList.prototype.doPop = function () {
    if (this.getSize() == 0) {
        return false;
    }
    delete this.array[this.getSize() - 1];
    if (this.getSize() === 0) {
        return 0;
    }
    if (this.getSize() > 0) {

        return this.array[this.getSize() - 1];
    }
};
myArrayList.prototype.listToList = function () {
};
myArrayList.prototype.doRemove = function (index) {
    if (this.getSize() <= 0) {
        return false;
    }
    for (let i = index; i < this.getSize() - 1; i++) {
        this.array[i] = this.array[i + 1];
    }
    delete this.array[this.getSize() - 1];
    return this.array;
};
myArrayList.prototype.doShift = function () {
    if (this.getSize() == 0) {
        return false;
    }
    for (let i = 0; i < this.getSize() - 1; i++) {
        this.array[i] = this.array[i + 1]
    }
    delete this.array[this.getSize() - 1];
    return this.array;
};
myArrayList.prototype.doSort = function () {
    if (this.getSize == 0) {
        return false;
    }

    let count = 0;
    for (let i = 0; i <= this.getSize(); i++) {
        if (this.array[i] / 0 == Infinity) {
            count++;
        }
    }
    if (count < this.getSize()) {
        return false;
    }
    for (i = 0; i < this.getSize() - 1; i++) {
        for (j = 0; j < this.getSize(); j++) {
            if (this.array[j] > this.array[j + 1]) {
                var temp = this.array[j];
                this.array[j] = this.array[j + 1];
                this.array[j + 1] = temp;
            }
        }
    }
    return this.array;
};
myArrayList.prototype.doSplice = function (pos, amount) {
    if (this.getSize() < amount + pos) {
        return false;
    }
    for (let i = pos; i <= pos + amount; i++) {
        this.array[i] = this.array[i + amount];
    }
    // let oldSize = this.doGetSize();
    // for(let i = oldSize; i>=oldSize-amount; i--){
    //     delete this.array[i];
    // }
    this.array.length = this.array.length - amount;
    return this.array;
};
myArrayList.prototype.doToString = function () {

    let result = '';
    for (let i = 0; i < this.getSize(); i++) {
        result = result + String(this.array[i]);
    }
    return result;
};
myArrayList.prototype.doMap = function (foo) {//foo(a) = return a*10;

    const result = new myArrayList();

    for (let i = 0; i < this.getSize(); i++) {
        result.array[i] = foo(this.array[i]);
    }
    return result;
};



function myLinkedList() {
    myList.apply(this, arguments);
    this.size = 0;
    this.rootNode = null;
}

myLinkedList.prototype = Object.create(myList.prototype)
myLinkedList.prototype.constructor = myLinkedList;


myLinkedList.prototype.sumSize = function () {
    this.size++;
    return this.size;
};
myLinkedList.prototype.minusSize = function () {
    if (this.size < 1) {
        return false;
    }
    this.size--;
    return this.size;
};
myLinkedList.prototype.initList = function () {
    if (this.rootNode != null) {
        return false;
    }
    if (this.rootNode == null) {
        this.rootNode = this.createNode('root');
        return this.rootNode;
    }
};
myLinkedList.prototype.createNode = function (el) {
    return {
        el: el,
        prev: null,
        next: null,
    }
};
myLinkedList.prototype.getLastNode = function (node) {
    if (node === null) {
        return null;
    }
    if (node.next === null) {
        return node;
    }
    return this.getLastNode(node.next);
};
myLinkedList.prototype.doPush = function (el) {
    if (this.rootNode === null) {
        this.initList();
    }
    if (this.rootNode.next == null) {

        this.rootNode.next = this.createNode(el);
        this.rootNode.next.prev = this.rootNode;
        this.sumSize();
        return this.rootNode.next;
    }
    if (this.rootNode.next != null) {
        let wasLast = this.getLastNode(this.rootNode);
        wasLast.next = this.createNode(el);
        this.getLastNode(this.rootNode).prev = wasLast;
        this.sumSize();
        return wasLast.next;
    } else {
        console.log('is empty');
    }

};
myLinkedList.prototype.upgradeList = function () {
    this.size = 0;
    if (this.rootNode != null) {
        this.rootNode = null;
    }
    const result = {
        root: this.rootNode,
        size: this.size,
    }
    return result;
};
myLinkedList.prototype.doUnshift = function (el) {
    if (this.rootNode === null) {
        this.initList();
    }
    if (this.rootNode.next === null) {
        this.rootNode.next = this.createNode(el);
        this.rootNode.next.prev = this.rootNode;
        this.sumSize();
        return this.rootNode.next;
    }
    if (this.rootNode.next != null) {
        let wasFirst = this.rootNode.next;//бывшая первая нода
        wasFirst.prev = this.createNode(el);//сщздали новую ноду, как прев первой
        wasFirst.prev.next = wasFirst;//привязали новой первой в некст бывшую первую
        this.rootNode.next = wasFirst.prev;//
        wasFirst.prev.prev = this.rootNode;
        this.sumSize();
        return this.rootNode.next;
    }

};
myLinkedList.prototype.doPop = function () {
    if (this.rootNode === null) {
        return false;
    }
    if (this.rootNode.next === null) {
        return false;
    }
    if (this.rootNode.next != null) {
        let wasLastNode = this.getLastNode(this.rootNode);
        let newLastNode = wasLastNode.prev;
        wasLastNode = null;
        newLastNode.next = null;
        this.minusSize();
        console.log(this.getLastNode(this.rootNode));
        return this.getLastNode(this.rootNode);
    }
};
myLinkedList.prototype.doRemove = function (val) {
    let wasValue;
    let prevNode;
    let nextNode;
    let deadNode
    if (this.rootNode === null) {

        return false;
    }
    if (this.rootNode.next === null) {
        return false;
    }
    deadNode = this.getNodeByValue(this.rootNode, val);
    if (deadNode === false) {
        return false;
    }

    wasValue = deadNode.el;
    if (this.rootNode.next.next === null) {
        this.rootNode.next = null;
        return wasValue;
    }
    prevNode = deadNode.prev;
    nextNode = deadNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.minusSize();
    return wasValue;
};
myLinkedList.prototype.getNodeByValue = function (pos, val) {

    if (this.rootNode === null) {
        return false;
    }
    if (this.rootNode.next === null) {
        return false;
    }
    if (pos.el === val) {
        return pos;
    }
    if (pos.el != val) {
        if (pos.next === null) {
            return false;
        }
        return this.getNodeByValue(pos.next, val);

    }

};
myLinkedList.prototype.doShift = function () {
    let newFirst = null;
    if (this.rootNode === null) {
        return false;
    }
    if (this.rootNode.next === null) {
        return false;
    }
    if (this.rootNode.next != null) {
        let wasFirst = this.rootNode.next;
    }
    if (this.rootNode.next.next === null) {
        this.rootNode.next = null;
        this.minusSize();
        return this.rootNode;
    }
    if (this.rootNode.next.next != null) {
        newFirst = this.rootNode.next.next;
        this.rootNode.next = newFirst;
        newFirst.prev = this.rootNode;
        this.minusSize();
        return this.rootNode.next;
    }
};
myLinkedList.prototype.changePosition = function (firstEl) {
    let first = this.getNodeByValue(this.rootNode, firstEl);
    if (first === null || first === false) {
        return false;
    }
    if (first.next === null || first.el === 'root') {
        return false;
    }
    let second = first.next;
    let zero = first.prev;
    if (this.getLastNode(this.rootNode) === second) {
        zero.next = second;
        first.prev = second;
        second.next = first;
        second.prev = zero;

        return second;
    }
    if (this.getLastNode(this.rootNode) === second.next) {
        let last = second.next;
        first.prev = second;
        second.prev = zero;
        last.prev = first;
        zero.next = second;
        second.next = first;
        first.next = last;
        return second;
    }
};
myLinkedList.prototype.sortInt = function (node) {
    for (let i = 1; i <= this.size - 1; i++) {
        for (let i = 1; i <= this.size - 1; i++) {
            let firstNode = this.getNextNode(node);

            let secondNode = firstNode.next;

            if (firstNode.el > secondNode.el) {
                this.changePosition(firstNode.el);
                node = secondNode;
            }
            if (firstNode.el <= secondNode.el) {
                node = firstNode;
            }
        }

    }
    console.log(this.getLastNode(this.rootNode));
    return this.getLastNode(this.rootNode);
}
myLinkedList.prototype.doSplice = function (val, amount) {
    let nextDead = null;
    let nextValue = null;
    if (arguments.length < 2 || arguments.length > 2) {
        return false;
    }
    if (this.rootNode === null || amount > this.size) {
        return false;
    }
    if (this.rootNode.next === null) {
        return false;
    }
    for (let i = 1; i <= amount; i++) {
        if (this.getNodeByValue(this.rootNode, val) === null || this.getNodeByValue(this.rootNode, val) === false) {
            return false;
        }

        nextDead = this.doRemoveForSplice(val);
        val = nextDead.el;

        if (nextDead === false) {
            return this.getLastNode(this.rootNode).el;
        }
    }
    if (arguments.length === 2) {
        return this.getLastNode(this.rootNode).el;
    }

};
myLinkedList.prototype.doRemoveForSplice = function (val) {

    let wasValue;
    let prevNode;
    let nextNode;
    let deadNode
    if (this.rootNode === null) {

        return false;
    }
    if (this.rootNode.next === null) {
        return false;
    }
    deadNode = this.getNodeByValue(this.rootNode, val);
    if (deadNode === false) {
        return false;
    }

    wasValue = deadNode.el;
    if (this.rootNode.next.next === null) {
        this.rootNode.next = null;
        return wasValue;
    }
    prevNode = deadNode.prev;
    nextNode = deadNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.minusSize();
    return nextNode;

};
myLinkedList.prototype.doToString = function () {
    let nextNode = this.rootNode;
    let result = 'root, ';
    let nextElement = '';
    for (let i = 0; i <= this.size + 2; i++) {

        nextNode = this.getNextNode(nextNode);
        nextElement = nextNode.el + ', ';
        result = result + String(nextElement);
        if (nextNode.next === null) {

            return result;
        }
    }
};
myLinkedList.prototype.getNextNode = function (node) {
    if (node === null) {
        return null;
    }
    if (node != null) {
        return node.next;
    }
    return null;
};
myLinkedList.prototype.doMap = function (foo) {
    const result = new myLinkedList();
    // let resultNextNode = result.rootNode;
    let nextNode = this.rootNode;
    for (let i = 0; i < this.getSize(); i++) {
        nextNode = this.getNextNode(nextNode);
        // resultNextNode=result.getNextNode(result.rootNode);
        let elem = foo(nextNode.el);
        result.doPush(elem);
    }
    return result.rootNode.next.el;
};

