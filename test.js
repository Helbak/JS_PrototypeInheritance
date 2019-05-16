


const l = new myLinkedList();
const a = new myArrayList();
const c = new myArrayList()
c.array = [1,2,3];
const link = new myLinkedList();
link.doPush(1);
link.doPush(2);
link.doPush(3);
const multiThen = function (a){
    return a*10;
};

describe(" test name", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test myLinkedList`, function () {
        const act = l.name;
        const exp = 'List';
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.name;
        const exp = 'List';
        assert.deepEqual(act, exp);
    });


});
describe(" test getSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test myLinkedList`, function () {
        l.size=5;
        const act = l.getSize();
        const exp = 5;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        a.array=[1,2,3,4,5];
        const act = a.getSize()
        const exp = 5;
        assert.deepEqual(act, exp);
    });


});
describe(" test upgradeList", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test myLinkedList`, function () {
        const act = l.upgradeList();
        const exp = {
            root:null,
            size:0,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        a.array=[1,2,3];
        const act = a.upgradeList();
        const exp = [];
        assert.deepEqual(act, exp);
    });


});
describe(" test Push List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
    })
    it(`test myLinkedList`, function () {
        const act = l.doPush('test');
        const exp = {
            el:'test',
            prev: l.rootNode,
            next: null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doPush('test');
        const exp = 'test';
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList`, function () {
        const act = l.doPush('test2');
        const exp = {
            el:'test2',
            prev: l.rootNode.next,
            next: null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doPush('test2');
        const exp = 'test2';
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList size`, function () {

        const act = l.getSize();
        const exp = 2;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList size`, function () {

        const act = a.getSize()
        const exp = 2;
        assert.deepEqual(act, exp);
    });

});
describe(" test doUnShift List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
    })
    it(`test myLinkedList`, function () {
        const act = l.doUnshift('test');
        const exp =
            {
                el:'test',
                prev: l.rootNode,
                next: null,
            };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doUnShift('test');
        const exp = 'test';
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList`, function () {
        const act = l.doUnshift('test2');
        const exp = {
            el:'test2',
            prev: l.rootNode,
            next: l.rootNode.next.next,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doUnShift('test2');
        const exp = 'test2';
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList size`, function () {

        const act = l.getSize();
        const exp = 2;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList size`, function () {

        const act = a.getSize()
        const exp = 2;
        assert.deepEqual(act, exp);
    });

});
describe(" test doPop List", () => {
    before(() => {

    })
    it(`test myLinkedList`, function () {
        const act = l.doPop();
        const exp =
            {
                el:'test2',
                prev: l.rootNode,
                next: null,
            };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doPop();
        const exp = 'test2';
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList`, function () {
        const act = l.doPop();
        const exp = {
            el:'root',
            prev: null,
            next: null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doPop();
        const exp = 0;
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList size`, function () {

        const act = l.getSize();
        const exp = 0;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList size`, function () {

        const act = a.getSize();
        const exp = 0;
        assert.deepEqual(act, exp);
    });

});
describe(" test doShift List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
        a.array=['test', 'test2'];
        l.doPush('test');
        l.doPush('test2');
    });
    it(`test myLinkedList`, function () {
        const act = l.doShift();
        const exp = {
            el:'test2',
            prev: l.rootNode,
            next: null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doShift();
        const exp = ['test2'];
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList`, function () {
        const act = l.doShift();
        const exp = {
            el:'root',
            prev: null,
            next: null,
        };
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doShift();
        const exp = [];
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList size`, function () {

        const act = l.getSize();

        const exp = 0;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList size`, function () {

        const act = a.getSize()
        const exp = 0;
        assert.deepEqual(act, exp);
    });

});
describe(" test doSort List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
        a.array=[5,4,3,2,1];
        l.doPush('test');
        l.doPush('test2');
    });
    // it(`test myLinkedList`, function () {
    //     const act = l.doSort();
    //     const exp = {
    //         el:'test2',
    //         prev: l.rootNode,
    //         next: null,
    //     };
    //     assert.deepEqual(act, exp);
    // });
    it(`test myArrayList`, function () {
        const act = a.doSort();
        const exp = [1,2,3,4,5];
        assert.deepEqual(act, exp);
    });
});
describe(" test doRemove List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
        a.array=[5,4,3,2,1];
        l.doPush('test');
        l.doPush('test2');
    });
    it(`test myLinkedList`, function () {
        const act = l.doRemove('test');
        const exp = 'test';
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doRemove(1);
        const exp = [5,3,2,1];
        assert.deepEqual(act, exp);
    });
});
describe(" test Splice List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
        a.array=[5,4,3,2,1];
        l.doPush('test');
        l.doPush('test2');
        l.doPush('test3');
    });
    it(`test myLinkedList`, function () {
        const act = l.doSplice('test',2);
        const exp = 'test3';
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doSplice(1,2);
        const exp = [5,2,1];
        assert.deepEqual(act, exp);
    });
});
describe(" test ToString List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
        a.array=[5,4,3,2,1];
        l.doPush('test');
        l.doPush('test2');
        l.doPush('test3');
    });
    it(`test myLinkedList`, function () {
        const act = l.doToString();
        const exp = 'root, test, test2, test3, ';
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doToString();
        const exp = '54321';
        assert.deepEqual(act, exp);
    });
});
describe(" test Map List", () => {
    before(() => {
        l.upgradeList();
        a.upgradeList();
        a.array=[5,4,3,2,1];
        l.doPush(1);
        l.doPush(2);
        l.doPush(3);
    });
    it(`test myLinkedList`, function () {
        const act = l.doMap(multiThen);
        const exp = 10;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList`, function () {
        const act = a.doMap(multiThen).array;
        const exp = [50,40,30,20,10];
        assert.deepEqual(act, exp);
    });
});
describe(" test convert array to Linked", () => {
    before(() => {

    })
    it(`test myLinkedList 1st node`, function () {
        const act = l.convertList(c).rootNode.next.el;
        const exp = 1;
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList 2nd node`, function () {
        const act = l.convertList(c).rootNode.next.next.el;
        const exp = 2;
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList 2nd node`, function () {
        const act = l.convertList(c).rootNode.next.next.next.el;
        const exp = 3;
        assert.deepEqual(act, exp);
    });
    it(`test myLinkedList size`, function () {
        const act = l.convertList(c).size;
        const exp = 3;
        assert.deepEqual(act, exp);
    });
    it(`test myArrayList 1st node`, function () {
        const act = a.convertList(link).array[0];
        const exp = 1;
        assert.deepEqual(act, exp);
    });


});


