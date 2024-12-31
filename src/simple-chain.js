/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chain.push(`( ${value === undefined ? '' : String(value).valueOf()} )`);
    this.length++;
    return this;
  },
  removeLink(position) {
    if (this.length >= position && Number.isInteger(position) && position > 0) {
      this.chain.splice(position - 1, 1);
      this.length--;
    } else {
      this.chain = [];
      this.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    this.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
