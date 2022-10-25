const hre = require("hardhat");

async function main() {
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNft");
  const roboPunksNFT = await RoboPunksNFT.deploy();

  await roboPunksNFT.deployed();

  console.log(
    "RoboPunksNFT deployed to:", roboPunksNFT.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
