const { c, cpp, node, python, java } = require("compile-run");

const compileC = (code, input) => {
  const len = input.length;
  c.runSource(code, len != 0 ? { stdin: input } : null)
    .then(result => {
      return new Promise((resolve, reject) => resolve(result));
    })
    .catch(e => {
      console.log(e);
      return new Promise((resolve, reject) => reject(e));
    });
};
const compileCpp = (code, input) => {
  const len = input.length;
  cpp
    .runSource(code, len != 0 ? { stdin: input } : null)
    .then(result => result)
    .catch(e => {
      console.log(e);
      return e;
    });
};
const compileNode = (code, input) => {
  const len = input.length;
  node
    .runSource(code, len != 0 ? { stdin: input } : null)
    .then(result => result)
    .catch(e => {
      console.log(e);
      return e;
    });
};
const compilePython = (code, input) => {
  const len = input.length;
  python
    .runSource(code, len != 0 ? { stdin: input } : null)
    .then(result => result)
    .catch(e => {
      console.log(e);
      return e;
    });
};
const compileJava = (code, input) => {
  const len = input.length;
  java
    .runSource(code, len != 0 ? { stdin: input } : null)
    .then(result => result)
    .catch(e => {
      console.log(e);
      return e;
    });
};

module.exports = {
  compileC,
  compileCpp,
  compileJava,
  compileNode,
  compilePython
};
