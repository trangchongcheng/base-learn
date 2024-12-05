const hre = require("hardhat");

async function main() {
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  const recipientAddress = "0xA39632B1621c8De98Dc097720D154bE36C254DEA";

  const contract = await hre.ethers.deployContract("TestNFT", [
    recipientAddress,
    1,
  ]);

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
}
//npx hardhat run scripts/deploy-erc721.js --network swisstronik
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
