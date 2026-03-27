const { ethers } = require("ethers");
const axios = require("axios");
require("dotenv").config();

async function getNetProfit(guardianAddress) {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    
    console.log(`Analyzing performance for: ${guardianAddress}`);

    // 1. Fetch all outgoing transactions to calculate Gas Spend
    // Mock: Using Etherscan API to sum up tx fees
    const gasSpend = ethers.parseEther("0.45"); 

    // 2. Fetch all RewardClaimed events from the Oracle
    // Mock: Summing up rewards from events
    const totalRewards = ethers.parseEther("2.5"); 

    // 3. Calculate ROI
    const netProfit = totalRewards - gasSpend;
    const roiPercentage = (Number(netProfit) / Number(gasSpend)) * 100;

    console.log("--- PERFORMANCE REPORT ---");
    console.log(`Total Rewards: ${ethers.formatEther(totalRewards)} ETH`);
    console.log(`Gas Overhead:  ${ethers.formatEther(gasSpend)} ETH`);
    console.log(`Net Profit:    ${ethers.formatEther(netProfit)} ETH`);
    console.log(`ROI:           ${roiPercentage.toFixed(2)}%`);
}

getNetProfit(process.env.GUARDIAN_ADDRESS).catch(console.error);
