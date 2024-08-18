const hre = require("hardhat");

async function main() {
  // Get the Degen smart contract
  const Degen = await hre.ethers.getContractFactory("Degen");

  // Deploy it
  const degen = await Degen.deploy();
  await degen.waitForDeployment();

  // Display the contract address
  console.log(`degen token deployed to ${degen.target}`);
  // 0x5dFbA09A5969e9FcF467252afA4e19DcA11Eb8B0
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
