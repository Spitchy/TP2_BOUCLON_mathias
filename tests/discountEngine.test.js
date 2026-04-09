const {
  calculateTotal, applyDiscount, applyPercentDiscount,
  applyVipDiscount, applyCoupon, capDiscount
} = require('../src/discountEngine');

describe('DiscountEngine', () => {
  test('R1 - total sans remise', () => {
    const items = [{ name: 'a', price: 10, qty: 2 }, { name: 'b', price: 5, qty: 1 }];
    expect(calculateTotal(items)).toBe(25);
  });

  test('R2 - remise fixe', () => {
    expect(applyDiscount(100, 10)).toBe(90);
    expect(applyDiscount(100, 0)).toBe(100);
  });

  test('R3 - remise en %', () => {
    expect(applyPercentDiscount(100, 20)).toBe(80);
    expect(applyPercentDiscount(100, 100)).toBe(0);
  });

  test('R4 - VIP > 100 → 10% remise', () => {
    expect(applyVipDiscount(101)).toBeCloseTo(90.9);
    expect(applyVipDiscount(99)).toBe(99);
  });

  test('R5 - coupon valide', () => {
    expect(applyCoupon(100, 'PROMO20')).toBe(80);
    expect(applyCoupon(100, 'PROMO50')).toBe(50);
  });

  test('R6 - coupon invalide', () => {
    expect(() => applyCoupon(100, 'FAKE')).toThrow('Code invalide');
  });

  test('R7 - remise capée à 50%', () => {
    expect(capDiscount(100, 40)).toBe(50);
    expect(capDiscount(100, 60)).toBe(60);
  });
});
