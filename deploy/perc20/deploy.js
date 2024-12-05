const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();
  const deployedContract = await perc20.getAddress();
  console.log(`PERC20Sample was deployed to: ${deployedContract}`);
}
//npx hardhat run scripts/deploy-perc20.js --network swisstronik
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
