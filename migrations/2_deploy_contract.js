const BitconnectToken = artifacts.require("../build/contracts/BitconnectToken");
module.exports = function(deployer) {
    deployer.deploy(BitconnectToken);
};
