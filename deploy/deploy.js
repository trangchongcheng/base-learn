const hre = require("hardhat");

async function main() {
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  console.log(`Danh sách contract đã deploy:\n`);
  const contract = await hre.ethers.deployContract("BasicMath");
  await contract.waitForDeployment();

  console.log(`1 ${contract.target} \n`);

  const contract2 = await hre.ethers.deployContract("ControlStructures");
  await contract2.waitForDeployment();

  console.log(`2 ${contract2.target} \n`);

  const contract3 = await hre.ethers.deployContract("EmployeeStorage", [
    1000,
    "Pat",
    50000,
    112358132134,
  ]);
  await contract3.waitForDeployment();

  console.log(`3 ${contract3.target} \n`);

  const contract4 = await hre.ethers.deployContract("ArraysExercise");
  await contract4.waitForDeployment();

  console.log(`4 ${contract4.target} \n`);

  const approvedRecords = [
    "Thriller",
    "Back in Black",
    "The Bodyguard",
    "The Dark Side of the Moon",
    "Their Greatest Hits (1971-1975)",
    "Hotel California",
    "Come On Over",
    "Rumours",
    "Saturday Night Fever",
  ];

  const contract5 = await hre.ethers.deployContract("FavoriteRecords", [
    approvedRecords,
  ]);
  await contract5.waitForDeployment();

  console.log(`5 ${contract5.target} \n`);

  const contract6 = await hre.ethers.deployContract("GarageManager");
  await contract6.waitForDeployment();

  console.log(`6 ${contract6.target} \n`);

  const salesperson = await hre.ethers.deployContract(
    "Salesperson",
    [55_555, 12_345, 20]
  );
  await salesperson.waitForDeployment();

  const engineeringManager = await hre.ethers.deployContract(
    "EngineeringManager",
    [54_321, 11_111, 200_000]
  );
  await salesperson.waitForDeployment();

  const contract7 = await hre.ethers.deployContract("InheritanceSubmission", [
    salesperson.target,
    engineeringManager.target,
  ]);
  await contract7.waitForDeployment();

  console.log(`7 ${contract7.target} \n`);

  const contract8 = await hre.ethers.deployContract("ImportsExercise");
  await contract8.waitForDeployment();

  console.log(`8 ${contract8.target} \n`);

  const contract9 = await hre.ethers.deployContract("ErrorTriageExercise");
  await contract9.waitForDeployment();

  console.log(`9 ${contract9.target} \n`);

  const contract10 = await hre.ethers.deployContract("AddressBookFactory");
  await contract10.waitForDeployment();

  console.log(`10 ${contract10.target} \n`);

  const contract11 = await hre.ethers.deployContract("UnburnableToken");
  await contract11.waitForDeployment();

  console.log(`11 ${contract11.target} \n`);

  const contract12 = await hre.ethers.deployContract("WeightedVoting", [
    "Test Weighted",
    "TESTW",
  ]);
  await contract12.waitForDeployment();

  console.log(`12 ${contract12.target} \n`);

  const contract13 = await hre.ethers.deployContract("HaikuNFT", [
    "Test Haiku NFT",
    "Test",
  ]);
  await contract13.waitForDeployment();

  console.log(`13 ${contract13.target} \n`);
}

//npx hardhat run --network base deploy/deploy.js
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
