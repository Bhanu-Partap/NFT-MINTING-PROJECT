
const hre = require("hardhat");

async function main() {
  async function getBalances(address){
    const balanceBigInt = await hre.ethers.provider.getBalance(address) ;
    return hre.ethers.utils.formatEther(balanceBigInt);

  }

  async function consoleBalances(addresses){
    let counter = 0;
    for(const address of addresses){
      console.log(`Address ${counter} balance:`, await getBalances(address));
    }
  }


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
