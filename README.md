# 🐱 KittyChainShop — Ethereum DApp for Kitten Adoption

**KittyChainShop** is a decentralized application (dApp) for managing kitten adoptions. Built with Truffle and Ethereum smart contracts, this project demonstrates how to develop, compile, deploy, test, and interact with a Solidity-powered smart contract through a web-based UI.

## ⚙️ Features

- Adoption tracking smart contract (`Adoption.sol`)
- Full Truffle-powered development workflow
- Comprehensive test suite using JavaScript
- Simple HTML/JS frontend for user interaction
- Local blockchain simulation via Ganache (or Truffle Development Network)

## 📋 Repository Structure

contracts/         // Contains Solidity smart contracts
migrations/        // Migration scripts for contract deployment
test/              // JavaScript tests for Adoption contract
public/            // Frontend UI assets (HTML, CSS, JS)
Adoption.json      // ABI and contract result output
Migrations.json    // Migration metadata
README.md          // Project documentation


## 🎯 Tutorial Walkthrough

Based on the Truffle Pet-Shop Tutorial, this project guides you through:

1. Setting up the development environment  
2. Creating a Truffle project  
3. Writing, compiling, and migrating a smart contract  
4. Writing and running smart contract tests  
5. Building a simple web interface to interact with your contract


## 🚀 Getting Started

### Prerequisites

Ensure you have:

- [Node.js](https://nodejs.org/) v8.x or newer
- npm (bundled with Node.js)
- Git CLI (for cloning the repo)
- Truffle installed globally:

npm install -g truffle

### Installation & Setup

Clone the repository and install dependencies:

git clone https://github.com/liewvk/KittyChainShop.git
cd KittyChainShop
npm install

### Compile & Migrate Contracts


truffle compile
truffle migrate


### Unit Testing


truffle test


Tests validate key functionalities of your `Adoption.sol` smart contract.

### Launch the Frontend


truffle serve


* This serves your DApp on a local HTTP server.
* Alternatively, open `public/index.html` directly in a browser and connect a local Ethereum node or Ganache instance.


## 🔧 Troubleshooting Tips

* **Truffle commands not found?**
  Ensure Truffle is installed globally (`npm install -g truffle`) and added to your PATH.

* **Frontend not displaying?**
  Use `truffle serve` or ensure CORS is allowed when opening `index.html`.

* **Tests fail during migration?**
  Reset your test chain or delete `.db` files to start with a clean state.


## 📚 Recommended Reading

* [Official Truffle Documentation](https://www.trufflesuite.com/docs) — for advanced network and plugin setup
* [Truffle Pet-Shop Tutorial](https://www.trufflesuite.com/tutorial) — foundational walkthrough on building adoption dApps
* [Solidity Docs](https://docs.soliditylang.org) — for writing and testing smart contracts

## 📝 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## 🙏 Acknowledgements

This DApp is adapted from the **Truffle Pet-Shop Tutorial**, tailored to explore Ethereum adoption logic using Solidity and Truffle workflows.

