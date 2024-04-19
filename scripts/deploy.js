const path = require('path')
const fs = require("fs");

async function main(){
	const [deployer] = await ethers.getSigners();
	console.log(await deployer.getAddress())

	const LOCK = await ethers.getContractFactory("Lock");

	
	const lock = await LOCK.deploy(deployer.getAddress())
	await lock.waitForDeployment();

}

function saveFrontendFiles(contract){
	
	const contractsDir = path.join(__dirname,"/../frontend/src/contracts");

	if(!fs.existsSync(contractsDir)){
	
		fs.mkdirSync(contractsDir)

	}

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ CM: cm.address }, null, 2)
  );
  // `artifacts` is a helper property provided by Hardhat to read artifacts
  const LockArtifact = artifacts.readArtifactSync("Lock");
  fs.writeFileSync(
    contractsDir + "/LOCK.json",
    JSON.stringify(LockArtifact, null, 2)
  );
}
	main().then(()=>process.exit(0)).catch((error)=>{
		console.error(error);
		process.exit(1);
	});


