const path = require("path");
var  HDWalletProvider = require('./client/node_modules/truffle-hdwallet-provider');

var infura_apikey = "f2477b75edf34b4999896ce9ef3b585c";
var mnemonic = "size alley piece zone erosion decide royal foam sentence lava erosion eyebrow";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" //Match any network id
        },
        ropsten: {
          /*provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey),
          network_id: 3*/
        provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey),
        network_id: 5777,
        gas: 6721975,
        gasPrice: 20000000000
        }
    },
  contracts_build_directory: path.join(__dirname, "client/src/contracts")
};
