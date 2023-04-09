const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function () {
  let nftContract;
  let owner;
  let addr1;

  beforeEach(async function () {
    const NFT = await ethers.getContractFactory("NFT");
    [owner, addr1] = await ethers.getSigners();
    nftContract = await NFT.deploy(addr1.address);
    await nftContract.deployed();
  });

  it("should create a new token", async function () {
    const tokenURI = "https://example.com";
    await expect(nftContract.createToken(tokenURI))
      .to.emit(nftContract, "Transfer")
      .withArgs("0x0000000000000000000000000000000000000000", owner.address, 1);

    const tokenOwner = await nftContract.ownerOf(1);
    expect(tokenOwner).to.equal(owner.address);

    const tokenURIStored = await nftContract.tokenURI(1);
    expect(tokenURIStored).to.equal(tokenURI);
  });
});
