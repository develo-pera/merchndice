// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PaymentContract {
    IERC20 public token;
    address public owner;
    uint256 public constant DEDUCTION_AMOUNT = 5 * 10**9; // 9 deciemal places
    uint256 public lastBlockChecked;
    address[] public participants;

    event PaymentReceived(address user, uint256 amount);
    event WinnerSelected(address winner, uint256 amount);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
        owner = msg.sender;
        lastBlockChecked = block.number;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // receive payments and register participants
    function deductPayment(address user) public onlyOwner {
        require(token.balanceOf(user) >= DEDUCTION_AMOUNT, "Insufficient balance");
        require(token.transferFrom(user, address(this), DEDUCTION_AMOUNT), "Transfer failed");
        participants.push(user);
        emit PaymentReceived(user, DEDUCTION_AMOUNT);
        _checkForWinner();
    }

    // check if it's time to select a winner
    function _checkForWinner() internal {
        // randomly select a winner if 15 blocks have passed since last selection
        if (block.number >= lastBlockChecked + 15) {
            _selectWinner();
            lastBlockChecked = block.number;
        }
    }

    // select a random winner from participants
    // ToDo: convert to use an oracle for randomness, I dont know how to do that yet
    function _selectWinner() internal {
        require(participants.length > 0, "No participants to select from");
        uint256 randomIndex = _random() % participants.length;
        address winner = participants[randomIndex];
        uint256 prize = token.balanceOf(address(this));
        require(token.transfer(winner, prize), "Prize transfer failed");

        emit WinnerSelected(winner, prize);
        // Reset participants for the next round
        delete participants;
    }

    // Internal function to generate a pseudo-random number
    function _random() internal view returns (uint256) {
        // Combining blockhash for added randomness beyond block.difficulty and timestamp
        return uint256(keccak256(abi.encodePacked(blockhash(block.number - 1), block.difficulty, block.timestamp, participants)));
    }
}
