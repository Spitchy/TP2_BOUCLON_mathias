const { Stack } = require('../src/stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => { stack = new Stack(); });

  test('création sans erreur', () => { expect(stack).toBeInstanceOf(Stack); });
  test('est vide à la création', () => { expect(stack.isEmpty()).toBe(true); });
  test('size() = 0 au départ', () => { expect(stack.size()).toBe(0); });
  test('push rend non vide', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
  test('size après push', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });
  test('push puis pop retourne même élément', () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });
  test('respecte LIFO', () => {
    stack.push(1); stack.push(2);
    expect(stack.pop()).toBe(2);
  });
  test('size diminue après pop', () => {
    stack.push(1); stack.push(2); stack.pop();
    expect(stack.size()).toBe(1);
  });
  test('peek lit sans dépiler', () => {
    stack.push('x');
    expect(stack.peek()).toBe('x');
    expect(stack.size()).toBe(1);
  });
  test('pop sur vide → erreur', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });
  test('peek sur vide → erreur', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
  test('clear vide la pile', () => {
    stack.push(1);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});
