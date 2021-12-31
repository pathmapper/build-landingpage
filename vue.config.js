module.exports = {
  publicPath: './',
  outputDir: '../../api/ogc/static/landingpage/',
  assetsDir: './',
  configureWebpack: {
    output: {
      hashFunction: 'sha256',
    },
    devtool: "source-map",
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    }
  },
  runtimeCompiler: true,
  devServer: {
    proxy: "http://192.168.99.47:8001",
  },
  transpileDependencies: ["vuetify"],
}
