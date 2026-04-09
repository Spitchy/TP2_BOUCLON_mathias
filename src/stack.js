class Stack {
  constructor() {
    this._items = [];
  }
  isEmpty() {
    return this._items.length === 0;
  }
  size() {
    return this._items.length;
  }
  push(item) {
    this._items.push(item);
  }
  pop() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this._items.pop();
  }
  peek() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this._items[this._items.length - 1];
  }
  clear() {
    this._items = [];
  }
}
module.exports = { Stack };
