const hre = require("hardhat");

async function main() {

  const EmitEvent = await hre.ethers.getContractFactory("EmitEvent");
  const emitEvent = await EmitEvent.deploy();

  console.log(`Contract deployed at ${emitEvent.address}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
