# DEGEN Token Contract

The DEGEN contract is an ERC20 token with additional functionality. Apart from the standard ERC20 functionality, it allows the contract owner to create redeemable items that users can redeem by burning a certain amount of their tokens. Each item can only be redeemed once.

## Contract Address

### **0xCE5d176516b88a47dB5aE2e057c10B817c61FA19**

## My Metamask Address

### **0xb49e01B29BAd2c70a331fc876b129457542F7563**


## Contract Structure

This contract is based on Solidity version 0.8.19 and uses the OpenZeppelin ERC20 contract for the basic ERC20 functionality.

### State Variables

- `owner` - The address of the owner of the contract
- `id` - A counter used to keep track of the last created item id
- `Items` - A mapping from `id` to `Item`, which allows to fetch item details using its id

### Structs

- `Item` - Represents an item, which has an owner, an amount, and a name

### Functions

- `mint(address to, uint256 amount)` - Allows the owner to mint new tokens and assign them to an address
- `burn(uint amount)` - Allows a user to burn their tokens
- `transfer(address to, uint256 amount)` - Allows a user to transfer their tokens to another address
- `createItem(uint256 amount, string memory _name)` - Allows the owner to create a new item with a specified amount and name
- `redeem(uint id_)` - Allows a user to redeem an item, the item's owner is updated to the redeemer's address and the item's amount of tokens are burned from the redeemer's balance
- `isUnclaimed(uint id_)` - Checks if an item is claimed or not
- `showItems(uint id_)` - Returns the details of an item given its id

## Usage

1. **Deployment:** When deploying this contract, the deployer address is set as the owner.
2. **Creating an Item:** The contract owner can create new items using the `createItem` function.
3. **Minting Tokens:** The contract owner can mint new tokens using the `mint` function.
4. **Burning Tokens:** Users can burn their tokens using the `burn` function.
5. **Redeeming an Item:** Any user can redeem an item using the `redeem` function, provided the item exists and is not already redeemed.
6. **Checking Item Status:** Anyone can check if an item is unclaimed using the `isUnclaimed` function.
7. **Viewing Item Details:** Anyone can view the details of an item using the `showItems` function.

## License

This contract is released under the MIT License.
