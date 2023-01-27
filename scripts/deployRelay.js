
const hre = require("hardhat");

async function main() {
  // hardhat-ethers
  const Relay = await hre.ethers.getContractFactory("Relay");
  const relay = await Relay.deploy();

  await relay.deployed();

  console.log(
    `Relay deployed to ${relay.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
