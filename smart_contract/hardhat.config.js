// https://eth-ropsten.alchemyapi.io/v2/MA3669-cVM67IK9mp2g7tulCH62FXRnp

require( '@nomiclabs/hardhat-waffle' );

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/MA3669-cVM67IK9mp2g7tulCH62FXRnp',
      accounts: ['dab30c7c5f218a5a3b8904c6edce6113b3fccf79e23c3bdf7d93c3b20cf44fad']
    }
  }
}