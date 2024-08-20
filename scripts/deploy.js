const hre = require("hardhat");

async function main() {
  // Get the Degen smart contract
  const Degen = await hre.ethers.getContractFactory("Degen");

  // Deploy it
  const degen = await Degen.deploy();
  await degen.waitForDeployment();

  // Display the contract address
  console.log(`degen token deployed to ${degen.target}`);
  // 0xCE5d176516b88a47dB5aE2e057c10B817c61FA19
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
