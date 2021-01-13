# Development
Modify the main token contract [./contracts/BitconnectToken.sol](./contracts/BitconnectToken.sol) to deploy a ERC20 token or replace it with a custom contract. 
Make sure the contract file name is referenced correctly in [./migrations/2_deploy_contract.js](./migrations/2_deploy_contract.js)

## Environment Variables

Each deployment environment has a different set of mandatory environment variables. Add the secrets required for the deployment environment to [.env](./.env)

Make sure to provide the 64 character long hexa-decimal `PRIVATE_KEY`. The associated address will inherit the tokens created by the contract deployment.

# Deployment

Deploy the smart contract to the desired environment with the provided commands. The address of the deployed contract will be
printed to the console output:

````

C:\www\bitconnect-community-token>npm run build && npm run deploy:development

> bitconnect-community-token@1.0.0 prebuild C:\www\bitconnect-community-token
> rimraf ./build/contracts/*


> bitconnect-community-token@1.0.0 build C:\www\bitconnect-community-token
> truffle compile


Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\BitconnectToken.sol
> Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20.sol
> Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol
> Compiling openzeppelin-solidity\contracts\math\SafeMath.sol
> Compiling openzeppelin-solidity\contracts\token\ERC20\IERC20.sol
> Artifacts written to C:\www\bitconnect-community-token\build\contracts
> Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Emscripten.clang


> bitconnect-community-token@1.0.0 deploy:development C:\www\bitconnect-community-token
> truffle migrate --network development


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x7c9b261c40d1194e8d165d4b4748afbf0f33b75eaec654c76568268c7627015e
   > Blocks: 0            Seconds: 0
   > contract address:    0xaef25335e51a3539aaa1a423a5fe12d8da113f98
   > account:             0x36eb45abc8cc719c6e594e582622a229ca98439e
   > balance:             99.99453676
   > gas used:            273162
   > gas price:           60 gwei
   > value sent:          0 ETH
   > total cost:          0.01146324 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00546324 ETH


2_deploy_contract.js
====================

   Deploying 'BitconnectToken'
   ----------------------------
   > transaction hash:    0x160b25a69fcd07e2143975576f43717291adb941a7c6d300ee728eda91d1173f
   > Blocks: 0            Seconds: 0
   > contract address:    0xa82a81a9c48c9ec2cad0774b7287daaaf771afec
   > account:             0x36eb45abc8cc719c6e594e582622a229ca98439e
   > balance:             99.96902082
   > gas used:            1226103 (0x12b577)
   > gas price:           60 gwei
   > value sent:          0 ETH
   > total cost:          0.07467538 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08667538 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.03013862 ETH
````

In this example the smart contract was deployed to the address `0xa82a81a9c48c9ec2cad0774b7287daaaf771afec` on the Ganache Development network. The address `0x36eb45abc8cc719c6e594e582622a229ca98439e` gained ownership to the smart contract and received 10000 tokens.


## Development network / Ganache 
Required environment variables
* PRIVATE_KEY

```
npm run build && npm run deploy:development
```

## Private network 
Required environment variables
* PRIVATE_KEY
* PRIVATE_NETWORK_URL
* PRIVATE_NETWORK_ID

Also make sure to verify the [truffle settings](./truffle-config.js) for `private` match the actual private network (gas, gasPrice, ...)

```
npm run build && npm run deploy:private
```

## Ropsten public testnet 
Required environment variables
* PRIVATE_KEY
* INFURA_KEY

Sign up for a free api key at https://infura.io/dashboard to deploy to public networks. Make sure the private key on ropsten has enough ether to fund the deployment transaction. 
Get free ether from a ropsten ethereum faucet https://faucet.ropsten.be/

```
npm run build && npm run deploy:ropsten
```

## Verify contract 
Required environment variables
* ETHERSCAN_API_KEY

```
truffle run verify <Contract Name> --network ropsten
```