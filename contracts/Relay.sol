// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Relay {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function relay(address target, bytes memory data) external {
        require(msg.sender == owner);
        (bool success, ) = target.call(data);
        require(success);
    }
}
