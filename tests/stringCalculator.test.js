const { add } = require('../src/StringCalculator');

describe('StringCalculator', () => {
  describe('Étape 1 & 2', () => {
    test('chaîne vide → 0', () => { expect(add('')).toBe(0); });
    test('"1" → 1', () => { expect(add('1')).toBe(1); });
  });

  describe('Étape 3 & 4', () => {
    test('"1,2" → 3', () => { expect(add('1,2')).toBe(3); });
    test('"1,2,3" → 6', () => { expect(add('1,2,3')).toBe(6); });
  });

  describe('Étape 5', () => {
    test('supporte \\n comme délimiteur', () => { expect(add('1\n2,3')).toBe(6); });
  });

  describe('Étape 6', () => {
    test('délimiteur custom ";"', () => { expect(add('//;\n1;2')).toBe(3); });
  });

  describe('Étape 7', () => {
    test('nombres négatifs → exception', () => { expect(() => add('1,-2,-3')).toThrow('-2'); });
  });

  describe('Étape 8 & 9', () => {
    test('ignore nombres > 1000', () => { expect(add('2,1001')).toBe(2); });
    test('supporte délimiteur long [***]', () => { expect(add('//[***]\n1***2***3')).toBe(6); });
  });
});
