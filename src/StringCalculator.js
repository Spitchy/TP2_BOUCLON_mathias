function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith('//')) {
    const match = numbers.match(/^\/\/(\[.*\]|.)\n/);
    if (match) {
      const raw = match[1];
      if (raw.startsWith('[')) {
        const inner = raw.slice(1, -1);
        delimiter = new RegExp(inner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      } else {
        delimiter = new RegExp(raw);
      }
      numbers = numbers.slice(match[0].length);
    }
  }

  const values = numbers.split(delimiter).filter(Boolean).map(Number);
  const negatives = values.filter(n => n < 0);
  if (negatives.length) throw new Error(`Nombres négatifs interdits: ${negatives.join(',')}`);

  return values.filter(n => n <= 1000).reduce((a, b) => a + b, 0);
}

module.exports = { add };
