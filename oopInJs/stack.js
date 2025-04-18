/**
 * Stack structure using JavaScript with new es6 feature
 */

const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Stack is Empty!");

        return items[_items.length - 1];
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Stack is Empty.");

        return items.pop();
    }

    get count() {
        return _items.get(this).length;
    }
}
