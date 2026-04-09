function validatePassword(password) {
  const errors = [];

  if (password.length < 8) errors.push('Minimum 8 caractères');
  if (!/[A-Z]/.test(password)) errors.push('Au moins 1 majuscule');
  if (!/[0-9]/.test(password)) errors.push('Au moins 1 chiffre');
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push('Au moins 1 caractère spécial');

  return { valid: errors.length === 0, errors };
}

module.exports = { validatePassword };
