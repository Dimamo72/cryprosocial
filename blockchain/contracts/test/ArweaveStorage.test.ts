const { expect, use } = require("chai");
const { waffleChai } = require("@ethereum-waffle/chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

use(waffleChai);

describe("ArweaveStorage", function () {
  let arweaveStorage;
  let owner;
  let user;

  const testArweaveId = "test-arweave-id";
  const testContentType = "application/json";
  const testSize = 1000;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const ArweaveStorage = await ethers.getContractFactory("ArweaveStorage");
    arweaveStorage = await ArweaveStorage.deploy();
    await arweaveStorage.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await arweaveStorage.owner()).to.equal(owner.address);
    });
  });

  describe("Content Storage", function () {
    it("Should store content metadata", async function () {
      await arweaveStorage.connect(user).storeContent(testArweaveId, testContentType, testSize);
      const metadata = await arweaveStorage.getContentMetadata(testArweaveId);

      expect(metadata.arweaveId).to.equal(testArweaveId);
      expect(metadata.owner).to.equal(user.address);
      expect(metadata.contentType).to.equal(testContentType);
      expect(metadata.size.toNumber()).to.equal(testSize);
      expect(metadata.isPermanent).to.equal(false);
    });

    it("Should emit ContentStored event", async function () {
      await expect(arweaveStorage.connect(user).storeContent(testArweaveId, testContentType, testSize))
        .to.emit(arweaveStorage, "ContentStored")
        .withArgs(testArweaveId, user.address, testContentType, BigNumber.from(testSize));
    });

    it("Should fail with invalid parameters", async function () {
      await expect(
        arweaveStorage.storeContent("", testContentType, testSize)
      ).to.be.revertedWith("Invalid Arweave ID");

      await expect(
        arweaveStorage.storeContent(testArweaveId, "", testSize)
      ).to.be.revertedWith("Invalid content type");

      await expect(
        arweaveStorage.storeContent(testArweaveId, testContentType, 0)
      ).to.be.revertedWith("Invalid size");
    });
  });

  describe("Content Permanence", function () {
    beforeEach(async function () {
      await arweaveStorage.connect(user).storeContent(testArweaveId, testContentType, testSize);
    });

    it("Should mark content as permanent", async function () {
      await arweaveStorage.markContentPermanent(testArweaveId);
      const metadata = await arweaveStorage.getContentMetadata(testArweaveId);
      expect(metadata.isPermanent).to.equal(true);
    });

    it("Should emit ContentMarkedPermanent event", async function () {
      await expect(arweaveStorage.markContentPermanent(testArweaveId))
        .to.emit(arweaveStorage, "ContentMarkedPermanent")
        .withArgs(testArweaveId);
    });

    it("Should only allow owner to mark content as permanent", async function () {
      await expect(
        arweaveStorage.connect(user).markContentPermanent(testArweaveId)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should fail to mark non-existent content as permanent", async function () {
      await expect(
        arweaveStorage.markContentPermanent("non-existent-id")
      ).to.be.revertedWith("Content does not exist");
    });
  });

  describe("Content Retrieval", function () {
    beforeEach(async function () {
      await arweaveStorage.connect(user).storeContent(testArweaveId, testContentType, testSize);
    });

    it("Should get user content", async function () {
      const userContent = await arweaveStorage.getUserContent(user.address);
      expect(userContent).to.have.lengthOf(1);
      expect(userContent[0]).to.equal(testArweaveId);
    });

    it("Should check if content is permanent", async function () {
      expect(await arweaveStorage.isContentPermanent(testArweaveId)).to.equal(false);
      await arweaveStorage.markContentPermanent(testArweaveId);
      expect(await arweaveStorage.isContentPermanent(testArweaveId)).to.equal(true);
    });

    it("Should fail to get non-existent content metadata", async function () {
      await expect(
        arweaveStorage.getContentMetadata("non-existent-id")
      ).to.be.revertedWith("Content does not exist");
    });
  });
});
