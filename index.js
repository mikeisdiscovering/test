const { generateMnemonic } = require("@generate-evm-addresses");


function generateMnemonic() {
  const mnemonic = generateMnemonic(24);
  return mnemonic;
}

module.exports = generateMnemonic;