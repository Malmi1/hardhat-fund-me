const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChain } = require("../../helper-hardhat-config")
const { assert } = require("chai")

developmentChain.includes(network.name)
    ? describe.skip
    : describe("FundMe  Staging Tests", function () {
          let fundMe
          let deployer
          let sendValue = ethers.utils.parseEther("1")

          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })

          it("allows peolpe to fund and withdraw", async function () {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endingBalance = fundMe.provider.getBalance(fundMe.address)

              assert.equal(endingBalance.toString(), "0")
          })
      })
