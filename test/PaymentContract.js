const { expect } = require("chai");

describe("PaymentContract", function () {
  it("Should withdraw 0.0035 ETH successfully", async function () {
    const Payment = await ethers.getContractFactory("PaymentContract");
    const payment = await Payment.deploy();
    await payment.deployed();

    const [owner, addr1] = await ethers.getSigners();

    // Simulate sending 0.0035 ETH
    const transaction = {to: payment.address, value: ethers.utils.parseEther("0.0035")};
    await addr1.sendTransaction(transaction);

    // addr1 balance before transaction
    const initialBalance = await addr1.getBalance();

    // Execute withdrawal
    await payment.withdrawFromAddress(addr1.address);

    // Check final balance
    const finalBalance = await addr1.getBalance();
    expect(finalBalance).to.be.above(initialBalance);
  });
});
