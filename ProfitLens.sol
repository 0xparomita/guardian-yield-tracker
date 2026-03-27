// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ProfitLens {
    struct GuardianStats {
        uint256 currentBalance;
        uint256 pendingBonds;
        uint256 totalDisputesWon;
    }

    /**
     * @dev Aggregates basic on-chain state for a Guardian.
     */
    function getQuickStats(address _guardian, address _token, address _oracle) 
        external 
        view 
        returns (GuardianStats memory) 
    {
        // Mock logic: in production, this would query the Oracle's 
        // internal mapping for active assertions by the guardian.
        return GuardianStats({
            currentBalance: IERC20(_token).balanceOf(_guardian),
            pendingBonds: 0, // Calculated via Oracle query
            totalDisputesWon: 0 // Fetched via events
        });
    }
}
