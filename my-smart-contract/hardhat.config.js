require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/IJiYy3KAQ_5picOTxIR8_8KeBlXyd--d",
      accounts: [
        "536cee37bac038a936f29dacd6207b976a6af219bc5cea192cc65fd3c3f9751f",
      ],
    },
  },
};
