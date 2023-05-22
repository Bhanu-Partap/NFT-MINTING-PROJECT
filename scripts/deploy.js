
const hre = require("hardhat");

async function main() {
  async function getBalances(address){
    const balanceBigInt = await hre.ethers.provider.getBalance(address) ;
    return hre.ethers.utils.formatEther(balanceBigInt);

  }



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
