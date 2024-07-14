pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Merch is Ownable, ERC721Enumerable {
    string public baseURL;

    constructor(string memory _name, string memory _symbol, string memory _baseUrl) ERC721(_name, _symbol) Ownable(msg.sender) {
        baseURL = _baseUrl;
    }

    function mint(address _to) public {
        _mint(_to, this.totalSupply() + 1);
    }

    function tokenURI(uint256 tokenId) public view override returns(string memory) {
        return string(abi.encodePacked(baseURL, "/", tokenId, ".json"));
    }
}