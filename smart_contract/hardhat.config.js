require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ykD0a3wVrkNeUH7P42rLjGIHPJJJR6vi",
      accounts: ['9dc62876965f24b905e0562b5ad06865b6d7376966169649e43025e2c2f9cce6']
    }
  }
}
