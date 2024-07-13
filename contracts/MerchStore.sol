// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MerchStore {
    IERC20 public token;
    address public owner;

    struct MerchItem {
        string name;
        string description;
        uint256 price;
        uint256 quantity;
        string ipfsImageHash; // upload the image manually on pinata for now and get the hash
    }

    MerchItem[] public merchItems;

    event MerchItemAdded(uint256 indexed itemId, string name, uint256 price, uint256 quantity, string ipfsImageHash);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // add a new merch item
    function addMerchItem(
        string memory name,
        string memory description,
        uint256 price,
        uint256 quantity,
        string memory ipfsImageHash
    ) public onlyOwner {
        merchItems.push(MerchItem(name, description, price, quantity, ipfsImageHash));
        uint256 itemId = merchItems.length - 1;
        emit MerchItemAdded(itemId, name, price, quantity, ipfsImageHash);
    }

    // retrieve merch item details
    function getMerchItem(uint256 itemId) public view returns (MerchItem memory) {
        require(itemId < merchItems.length, "Item does not exist");
        return merchItems[itemId];
    }
}
