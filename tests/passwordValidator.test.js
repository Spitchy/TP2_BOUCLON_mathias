// tests/passwordValidator.test.js
// NE PAS MODIFIER CE FICHIER
const { validatePassword } = require('../src/passwordValidator');
describe('validatePassword', () => {
 describe('longueur', () => {
 test('moins de 8 caractères → invalide', () => {
 expect(validatePassword('Ab1!567')).toMatchObject({
 valid: false,
 errors: expect.arrayContaining(['Minimum 8 caractères']),
 });
 });
 test('8 caractères ou plus → longueur OK', () => {
 expect(validatePassword('Ab1!5678').errors)
 .not.toContain('Minimum 8 caractères');
 });
 });
 describe('majuscule', () => {
 test('aucune majuscule → erreur', () => {
 expect(validatePassword('ab1!5678').errors)
 .toContain('Au moins 1 majuscule');
 });
 test('avec majuscule → pas d\'erreur', () => {
 expect(validatePassword('Ab1!5678').errors)
 .not.toContain('Au moins 1 majuscule');
 });
 });
 describe('chiffre', () => {
 test('aucun chiffre → erreur', () => {
 expect(validatePassword('Abc!defg').errors)
 .toContain('Au moins 1 chiffre');
 });
 });
 describe('caractère spécial', () => {
 test('aucun spécial → erreur', () => {
 expect(validatePassword('Abc12345').errors)
 .toContain('Au moins 1 caractère spécial');
 });
 });
 describe('résultat global', () => {
 test('mot de passe valide → valid: true et errors vide', () => {
 expect(validatePassword('Ab1!5678')).toEqual({
 valid: true, errors: [],
 });
 });
 test('multiple erreurs → toutes listées', () => {
 const GoodPassword = validatePassword('Ab1!5678');
 expect(GoodPassword.valid).toBe(false);
 expect(GoodPassword.errors).toHaveLength(3); // longueur, majuscule, chiffre
 const BadPassword = validatePassword('abc');
 expect(BadPassword.valid).toBe(false);
 expect(BadPassword.errors).toHaveLength(4); // toutes les erreurs
 });
 });
});