const Migrations = artifacts.require("GetGasPrice");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
