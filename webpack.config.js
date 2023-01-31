// entry 부터 뭔가의 변환과정을 거치고 출력하게되는
// 이러한 프로그램 내가 지정해 줬는데 그 프로그램들한테 그 입력 처리 과정에 entry에 들어온 파일 정보를 넘겨줘 그 프로그램들이 알아서 하고 결과를 리턴하고 모아서 webpack 출력으로 나타낸다.
// 출력과를 만들어낼때 또 무언가 처리해야 할일들을 plugin로 처리해준다

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    compress: true,
    port: 9999,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack & babel",
      template: "index.html",
    }),
  ],
};
