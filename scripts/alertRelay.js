
const hre = require("hardhat");

const RELAY_ADDR = "";
const TARGET_ADDR = "";

async function main() {
  // hardhat-ethers
  const relay = await hre.ethers.getContractAt("Relay", RELAY_ADDR);
  
  let ABI = [
    "function attempt()"
  ];
  let iface = new ethers.utils.Interface(ABI);
  const calldata = iface.encodeFunctionData('attempt');
  const tx = await relay.relay(TARGET_ADDR, calldata);

  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
