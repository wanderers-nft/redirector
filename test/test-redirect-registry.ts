import { expect } from "chai";
import { ethers } from "hardhat";

describe("RedirectRegistry", function () {
  it("Should be able to set a redirect address", async function () {
    const accounts = await ethers.getSigners();

    const RedirectRegistry = await ethers.getContractFactory("RedirectRegistry");
    const redirectRegistry = await RedirectRegistry.deploy();
    await redirectRegistry.deployed();

    await redirectRegistry.connect(accounts[0]).register(await accounts[1].getAddress());

    expect(await redirectRegistry.redirects(await accounts[0].getAddress()))
      .to
      .equal(await accounts[1].getAddress());

  });
});
