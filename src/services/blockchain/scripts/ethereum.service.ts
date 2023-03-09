import { ethers } from 'hardhat';
import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
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

  async storeName(name: string): Promise<void> {
    const nameContract = await this.connectToContract();
    await nameContract.setName(name);
  }

  async getName(): Promise<string> {
    const nameContract = await this.connectToContract();
    const name = await nameContract.getName();
    console.log(name);
    return name;
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
