async function main() {
  const Degen = "0xCE5d176516b88a47dB5aE2e057c10B817c61FA19";
  const degen = await ethers.getContractAt("Degen", Degen);

  const [signer] = await ethers.getSigners();
  const signerAddress = signer.address;
  const user = "0xb49e01B29BAd2c70a331fc876b129457542F7563";

  const degenBalance = await degen.balanceOf(signerAddress);
  console.log("Degen balance:", degenBalance);

  //   mint to me
  const mintTx = await degen.mint(signerAddress, 2000);
  await mintTx.wait();

  // burn
  const burnTx = await degen.burn(100);
  await burnTx.wait();

  // create item
  const createItem1Tx = await degen.createItem(500, "mysteryBox");
  await createItem1Tx.wait();
  const createItem2Tx = await degen.createItem(200, "mysteryCard");
  await createItem2Tx.wait();

  // redeem item
  const redeemTx = await degen.redeem(1);
  await redeemTx.wait();

  // check unclaimed
  const item1UnClaimed = await degen.isUnclaimed(1);
  console.log("Item 1 Claimed:", item1UnClaimed);
  const item2UnClaimed = await degen.isUnclaimed(2);
  console.log("Item 2 Claimed:", item2UnClaimed);

  // show items
  const item1 = await degen.showItems(1);
  console.log("item1", item1);
  const item2 = await degen.showItems(2);
  console.log("item2", item2);

  const degenBalance2 = await degen.balanceOf(signerAddress);
  console.log("Degen balance:", degenBalance2);

  userBalance = await degen.balanceOf(user);
  console.log("Degen balance:", userBalance);

  // transfer item
  const transferItemTx = await degen.transfer(user, 100);
  await transferItemTx.wait();

  userBalance2 = await degen.balanceOf(user);
  console.log("Degen balance:", userBalance2);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
