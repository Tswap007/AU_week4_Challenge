const hre = require("hardhat");

const CONTRACT_ADDR = "0x2A83EC7D6d0aBD05B90a36b84f67ECa93f43c958";
const EVENT_CONTRACT = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
    const contract = await hre.ethers.getContractAt("EmitEvent", CONTRACT_ADDR);

    const tx = await contract.callEvent(EVENT_CONTRACT);

    await tx.wait()

    console.log("Event called successfully");


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});