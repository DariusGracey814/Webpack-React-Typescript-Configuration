const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (envVar) => {
  const { env } = envVar;
  console.log("Mode: " + env);
  const envConfig = require(`./webpack.${env}.js`);
  console.log("ENV Config: " + envConfig);
  const config = merge(commonConfig, envConfig);
  return config;
};
