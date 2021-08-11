module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy('UniswapV2Factory', {
    from: deployer,
    args: [deployer],
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
  })
}

module.exports.tags = ["UniswapV2Factory"]
