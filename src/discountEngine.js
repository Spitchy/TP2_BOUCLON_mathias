function calculateTotal(items) {
  return items.reduce((sum, { price, qty }) => sum + price * qty, 0);
}

function applyDiscount(total, amount) {
  return Math.max(0, total - amount);
}

function applyPercentDiscount(total, percent) {
  return Math.max(0, total * (1 - percent / 100));
}

function applyVipDiscount(total) {
  return total > 100 ? total * 0.9 : total;
}

function applyCoupon(total, code) {
  const coupons = { PROMO10: 10, PROMO20: 20, PROMO50: 50 };
  if (!coupons[code]) throw new Error('Code invalide');
  return applyPercentDiscount(total, coupons[code]);
}

function capDiscount(originalTotal, discountedTotal) {
  const minAllowed = originalTotal * 0.5; // pas moins de 50 %
  return Math.max(discountedTotal, minAllowed);
}

module.exports = {
  calculateTotal,
  applyDiscount,
  applyPercentDiscount,
  applyVipDiscount,
  applyCoupon,
  capDiscount
};
