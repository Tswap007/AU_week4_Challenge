// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Contract {
    function attempt() external;
}

contract EmitEvent {
    function callEvent(address _contract) external {
        Contract(_contract).attempt();
    }
}
