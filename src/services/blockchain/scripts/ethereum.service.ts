import { ethers } from 'hardhat';
import { readFile, writeFile } from 'fs/promises';
export class EthereumService {
  async deployContract(): Promise<void> {
    const nameContract = await ethers.getContractFactory('Name');
    const deployedNameContract = await nameContract.deploy();
    await this.storeDeployedContractAddress(deployedNameContract.address);
  }

  async connectToContract(): Promise<any> {
    const nameContractAddress = await this.getDeployedContractAddress();
    return await ethers.getContractAt('Name', nameContractAddress);
  }

  async setName(name: string): Promise<void> {
    const nameContract = await this.connectToContract();

    //convert string to bytes32 for storing in contract
    await nameContract.setName(ethers.utils.formatBytes32String(name));
  }

  async getName(): Promise<string> {
    const nameContract = await this.connectToContract();
    const name = await nameContract.getName();
    return ethers.utils.parseBytes32String(name);
  }

  private async getDeployedContractAddress(): Promise<string> {
    return JSON.parse(
      (
        await readFile(
          './src/services/blockchain/artifacts/nameContractAddress.json',
        )
      ).toString(),
    ).contractAddress;
  }

  private async storeDeployedContractAddress(
    contractAddress: string,
  ): Promise<void> {
    const nameContractAddress = JSON.stringify({
      contractAddress: contractAddress,
    });

    await writeFile(
      './src/services/blockchain/artifacts/nameContractAddress.json',
      nameContractAddress,
    );
  }
}
