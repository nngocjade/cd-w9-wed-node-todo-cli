// HERE IS AN EXTENSION FO AN EXISITN LIBRARY
const c = require("chalk");

class Print {
  blue(...t) {
    return c.blue.bold(...t);
  }
  yellow(...t) {
    return c.yellow.bold(...t);
  }
  green(...t) {
    return c.green.bold(...t);
  }
  black(...t) {
    return c.black.bold(...t);
  }
  red(...t) {
    return c.red.bold(...t);
  }
  redBright(...t) {
    return c.redBright.bold(...t);
  }
}

module.exports = new Print();
