const path = require("path");
const { override, addWebpackAlias, fixBabelImports } = require("customize-cra");
module.exports = override(
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src/")
  }),
  fixBabelImports("antd-mobile", {
    libraryName: "antd-mobile",
    libraryDirectory: "lib",
    style: "css"
  }),
  fixBabelImports("antd", {
    libraryName: "antd",
    libraryDirectory: "lib",
    style: "css"
  })
);
