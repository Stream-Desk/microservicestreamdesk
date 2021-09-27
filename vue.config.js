module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
    port: 8082,
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
