/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.LETTER_A_CHAR_CODE = 97;
    this.LETTER_Z_CHAR_CODE = 122;
    this.ENG_ALPHABET_LETTER_COUNT = 26;
    this.process = (callback, message, key) => {

      let result = '';
      let index = 0;

      message.forEach((letter) => {
        if (letter.match(/[a-z]/)) {
          result += callback(letter, key[index % key.length].charCodeAt(0) - this.LETTER_A_CHAR_CODE);
          index++;
        } else {
          result += letter;
        }
      });

      return result;
    }
  }

  encrypt() {
    if ([...arguments].filter(arg => arg !== undefined).length !== 2) throw new Error('Incorrect arguments!');
    const message = (this.isDirect ? [...arguments[0]] : [...arguments[0]].reverse()).map(el => el.toLowerCase());
    const key = arguments[1].toLowerCase();

    const changeChar = (char, movement) =>
      String.fromCharCode((char.charCodeAt(0) + movement) % this.LETTER_A_CHAR_CODE
        % this.ENG_ALPHABET_LETTER_COUNT + this.LETTER_A_CHAR_CODE)
        .toUpperCase();

    return this.process(changeChar, message, key);
  }

  decrypt() {
    if ([...arguments].filter(arg => arg !== undefined).length !== 2) throw new Error('Incorrect arguments!');
    const message = (this.isDirect ? [...arguments[0]] : [...arguments[0]].reverse()).map(el => el.toLowerCase());
    const key = arguments[1].toLowerCase();

    const changeChar = (char, movement) => {
      let diff = char.charCodeAt(0) - movement;
      return String.fromCharCode(diff >= this.LETTER_A_CHAR_CODE ? diff
        : this.LETTER_Z_CHAR_CODE - (this.LETTER_A_CHAR_CODE - diff) + 1)
        .toUpperCase();
    }

    return this.process(changeChar, message, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
