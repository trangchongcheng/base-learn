// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract UnburnableToken {
    // Errors for reverting transactions
    error TokensClaimed();
    error AllTokensClaimed();
    error UnsafeTransfer(address);

    uint public totalSupply;
    uint public totalClaimed;
    mapping(address => uint) public balances;

    // Mapping to track if an address has claimed tokens
    mapping(address => bool) private claimed;

    // Constructor to set the initial total supply of tokens
    constructor() {
        totalSupply = 100_000_000;
    }

    // Claim function for users to claim tokens
    function claim() external {
        // Ensure the address hasn't claimed already
        if (claimed[msg.sender]) {
            revert TokensClaimed();
        }

        // Check if there are tokens left to be claimed
        if (totalClaimed + 1000 > totalSupply) {
            revert AllTokensClaimed();
        }

        // Mark the address as having claimed and increase their balance
        claimed[msg.sender] = true;
        balances[msg.sender] += 1000;

        // Increment the total number of claimed tokens
        totalClaimed += 1000;
    }

    // Safe transfer function to transfer tokens between addresses
    function safeTransfer(address _to, uint amount) external {
        // Check if the recipient is not a zero address, has a balance, and sender has enough tokens
        if (
            _to == address(0) ||
            _to.balance == 0 ||
            balances[msg.sender] < amount
        ) {
            revert UnsafeTransfer(_to);
        }

        // Perform the transfer
        balances[msg.sender] -= amount;
        balances[_to] += amount;
    }

    // For testing, allows setting total supply (not recommended for production)
    function _setTotalSupply(uint _totalSupply) external {
        totalSupply = _totalSupply;
    }
}
