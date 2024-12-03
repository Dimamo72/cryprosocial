import { ethers } from "hardhat";

async function main() {
  console.log("Deploying ArweaveStorage contract...");

  const ArweaveStorage = await ethers.getContractFactory("ArweaveStorage");
  const arweaveStorage = await ArweaveStorage.deploy();

  await arweaveStorage.deployed();

  console.log("ArweaveStorage deployed to:", arweaveStorage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
