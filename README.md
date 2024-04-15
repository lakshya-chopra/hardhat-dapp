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

## Compile & Test:
