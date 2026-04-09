/**
 * Difficulté rencontrée : se forcer à ne pas anticiper la solution
 * et respecter le cycle red → green → refactor à chaque étape.
 */

const { fizzbuzz } = require('../src/fizzbuzz');

describe('fizzbuzz', () => {
  test('n=1 retourne "1"', () => { expect(fizzbuzz(1)).toBe('1'); });
  test('n=2 retourne "2"', () => { expect(fizzbuzz(2)).toBe('2'); });
  test('n=3 retourne "Fizz"', () => { expect(fizzbuzz(3)).toBe('Fizz'); });
  test('n=5 retourne "Buzz"', () => { expect(fizzbuzz(5)).toBe('Buzz'); });
  test('n=15 retourne "FizzBuzz"', () => { expect(fizzbuzz(15)).toBe('FizzBuzz'); });
  test('n=6 retourne "Fizz"', () => { expect(fizzbuzz(6)).toBe('Fizz'); });
  test('n=10 retourne "Buzz"', () => { expect(fizzbuzz(10)).toBe('Buzz'); });
  test('n=7 retourne "7"', () => { expect(fizzbuzz(7)).toBe('7'); });
});
