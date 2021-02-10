const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function () {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });
};

module.exports = { setupInput };