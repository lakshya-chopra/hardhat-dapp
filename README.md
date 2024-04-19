# hardhat-dapp

## Pre-requisites:

  ### Installation:
  ```
  npm
  Node JS (version >=18.0)
  ```

  Create a new directory:
  ```
  sudo mkdir deployContracts
  cd deployContracts
  ```
  Setup the project using (make sure that you have write permissions the folder where the packages are installed, use this command: `sudo chown -R $USER /usr/local/lib/node_modules`) 
  [eacces permission error solved](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
  ```
  npm init
  ```
  Install hardhat & hardhat-in this new directory (use `-g` for global) using:
  ```
   npm install --save-dev hardhat
  ```
  ```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

  ### Initialize a new hardhat env:
  ```
  npx hardhat init
  ```
![image](https://github.com/lakshya-chopra/hardhat-dapp/assets/77010972/d77c9d42-2c75-4b2f-b5f3-57bcb58dc0c4)

## Hardhat folder structure:
![image](https://github.com/lakshya-chopra/hardhat-dapp/assets/77010972/260edf48-38a4-4520-8939-abacbf45daad)


## Compile & Test:
Navigate to the folder where your contracts are stored and run:
```
npx hardhat compile
```

For testing, go to the test DIRECTORY:
```
npx hardhat test
```
![image](https://github.com/lakshya-chopra/hardhat-dapp/assets/77010972/b3969b63-bcc2-42e4-a355-f016f49e7af5)

## Deploy:

Navigate to the project's main directory & run, here we'll use hardhat's ignition:
Note: we can also deploy to some Web3 remote network like Infura, by sending some SepoliaEther.
```
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
![image](https://github.com/lakshya-chopra/hardhat-dapp/assets/77010972/e2353534-eb54-44d2-8b31-3f1443f070f2)

## Deploy locally using a custom made deploy.js script:

Install {ethers} JS:
```
npm install --save ethers
```
```
$ mkdir scripts && cd scripts
$ touch deploy.js
$ vim deploy.js
```







```
