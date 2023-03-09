import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

const config: HardhatUserConfig = {
  defaultNetwork: 'ganache',
  networks: {
    goerli: {
      url: `${process.env.ALCHEMY_URL}`,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    },
    ganache: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: [`0x${process.env.GANACHE_PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: '0.8.17',
  },
  paths: {
    sources: './src/services/blockchain/contracts',
    artifacts: './src/services/blockchain/artifacts/artifacts',
  },
};

export default config;
