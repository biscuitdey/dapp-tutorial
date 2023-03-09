import { EthereumService } from './scripts/ethereum.service';
import { ethers } from 'hardhat';

describe('Ethereum services', () => {
  let name: EthereumService;

  beforeAll(async () => {
    name = new EthereumService();
    await name.deployContract();
  });

  describe('setName', () => {
    it('should set name', async () => {
      //Arrange
      const nameContract = await name.connectToContract();

      //Act
      await name.setName('Test1');

      const storedNameBytes = await nameContract.name();

      const storedNameString = ethers.utils.parseBytes32String(storedNameBytes);
      //Assert
      expect(storedNameString).toEqual('Test1');
    });
  });

  describe('getName', () => {
    it('should return the stored name', async () => {
      //Act
      await name.setName('Test2');

      //Assert
      expect(await name.getName()).toEqual('Test2');
    });
  });
});
