require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API = process.env.ETHERSCAN_API
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCUP_KEY = process.env.COINMARKETCUP_KEY

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    // solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCUP_KEY,
        token: "ETH",
    },
    etherscan: {
        apiKey: ETHERSCAN_API,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
