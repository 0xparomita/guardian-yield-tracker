# Guardian Yield Tracker

The sustainability of optimistic governance depends on active Guardians. This tool provides a financial "Income Statement" for a security bot, tracking every Wei spent on bonds and every Wei earned from rewards.

## Key Metrics
* **Gross Rewards**: Total tokens earned from successful disputes.
* **Gas Overhead**: Total ETH spent on transaction fees for monitoring and disputing.
* **Net Profit**: (Gross Rewards + Returned Bonds) - (Initial Bonds + Gas).
* **Success Rate**: Ratio of won disputes vs. lost/cancelled disputes.

## Technical Architecture
Uses a **History Indexer** to scan for `DisputeSettled` and `RewardClaimed` events. It then cross-references these with `Transaction` gas costs via the Etherscan API to provide a true "Bottom Line" for the operation.
