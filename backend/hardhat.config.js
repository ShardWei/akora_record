require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require('hardhat-docgen')
require('dotenv').config();


const MUMALCHEMY = process.env.MUMALCHEMY || "";
const PK = process.env.PK || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMALCHEMY}`,
      accounts: [`0x${PK}`],
      chainId: 80001,
      
    }
    ,
  },
  docgen: {
    path: './docs',
    clear: true
  },
  solidity : {
    compilers: [
      {
        version: "0.8.18"
      }
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    }
  },
}